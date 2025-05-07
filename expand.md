1. It's important to put thought into them to consider future overhead, you want to be specific and careful when using IDs and classes, as your codebases grows it will make your life much easier.
2. Data attributes allow elements to store data without using extra classes or IDs. You may access them with `element.dataset.key`. They're very useful for custom behaviors.
3. A DOM fragment is a temporary container for elements, allowing for increased performance in reducing repainting in the browser.
4. The virtual DOM is a lightweight copy of the real DOM, it is useful in performance, but reduced use in debugging and control over the DOM.
5. the word `class` is a reserved word, and as such, you can't use it as a property name. 
6. addEventListener allows for multiple event handlers at once, while onClick is simpler to use but only allows for one function at a time.