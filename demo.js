function convert(arr) {
    // 用于 id 和 treeNode 的映射
    var idToTreeNode = new Map();
    var root = null;
    arr.forEach(function (item) {
        var id = item.id, name = item.name, parentId = item.parentId;
        var treeNode = { id: id, name: name };
        idToTreeNode.set(id, treeNode);
        var parentNode = idToTreeNode.get(parentId);
        if (parentNode) {
            // 如果有父节点，就把自己放到父节点的 children 数组中
            if (!parentNode.children) {
                parentNode.children = [];
            }
            parentNode.children.push(treeNode);
        }
        if (parentId === 0) {
            // 如果没有父节点，就把自己作为根节点
            root = treeNode;
        }
    });
    return root;
}
var arr = [
    { id: 1, name: '部门A', parentId: 0 },
    { id: 2, name: '部门B', parentId: 1 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 2 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
];
var tree = convert(arr);
