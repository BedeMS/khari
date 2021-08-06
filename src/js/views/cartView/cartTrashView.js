import View from "../View";

class cartTrashView extends View {

    addHandlerCartTrash(handler){
        document.addEventListener("click", e => {
            if(e.target.closest(".cart__item-remove")){
                let itemId = e.target.closest(".cart__item").id;
                handler(itemId);
            }
        })
    }


};

export default new cartTrashView();
