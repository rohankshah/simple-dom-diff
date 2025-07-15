// If type of parent container is different, we need to replace the whole dom
// Track which props - a. have been updated, b. are to be removed
function diff(oldDom, newDom) {
    if (oldDom.type !== newDom.type) {
        return { type: 'REPLACE' }
    }

    const propsDiff = { set: {}, remove: [] }
    for (const prop of Object.keys(oldDom.props)) {
        if (!newDom.props[prop]) {
            propsDiff.remove.push(prop)
        }
        if (oldDom.props[prop] !== newDom.props[prop]) {
            propsDiff.set[prop] = newDom.props[prop]
        }
    }
    for (const prop of Object.keys(newDom.props)) {
        if (!oldDom.props[prop]) {
            propsDiff.set[prop] = newDom.props[prop]
        }
    }

    const childDiffs = []

    for (let i = 0; i < Math.max(oldDom.children.length, newDom.children.length); i++) {
        if (!newDom.children[i]) {
            childDiffs.push({ index: i, type: 'REMOVE' })
        }
        else if (!oldDom.children[i]) {
            childDiffs.push({ index: i, type: 'INSERT' })
        }
        else {
            const change = diff(oldDom.children[i], newDom.children[i])
            if (change) {
                childDiffs.push({ index: i, type: 'UPDATE', change })
            }
        }
    }

    return { type: 'UPDATE', props: propsDiff, children: childDiffs }
}


export { diff }