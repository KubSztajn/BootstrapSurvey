//Add choice input function
document.getElementById('add-choice').onclick = function(parentId, elementId, elementTag, html) {
    let p = document.getElementById('choices');
    let newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    html =  '<input style="margin-top: 20px;" id="added" type="text" class="form-control d-inline" placeholder="Enter choice">';
    newElement.innerHTML = html;
    p.appendChild(newElement);
};

//Remove choice input function
document.getElementById('remove-choice').onclick = function() {
    let addedInput = document.getElementById('added');
    addedInput.parentNode.removeChild(addedInput);
};


