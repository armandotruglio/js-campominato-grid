function createNode(elementType, className){
    const element = document.createElement(elementType);
    element.className = className;

    return element;
}