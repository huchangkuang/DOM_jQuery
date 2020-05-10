window.jQuery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === "string") {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    // const api = {
    return {
        oldApi: selectorOrArray.oldApi,
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            // return api
            return this //链式操作，jQuery设计风格
        },
        find(selector) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                array = array.concat(Array.from(elements[i].querySelectorAll(selector)))
            }
            array.oldApi = this
            return jQuery(array)
        },
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i)
            }
        },
        parent() {
            let array = []
            this.each((node) => {
                if (array.indexOf(node.parentNode) === -1) {//没有父节点，则push进数组
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        children(){
            let array = []
            this.each((node) => {
                if (array.indexOf(node.childrenNode) === -1) {
                    array.push(...node.children)
                }
            })
            return jQuery(array)
        },
        print() {
            console.log(elements)
        }
    }
}