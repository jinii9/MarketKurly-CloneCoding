const initialState = {
    info:[]
}

export const BasketAction = (data) => {
    return {
        type: "BASKET",
        data: data,
    };
};

const BasketReducer = (state=initialState, action) => {
    switch (action.type) {
        case "BASKET": {
            return {
                    ...state,
                    info: state.info.concat({
                        id: action.data.id,
                        name: action.data.name,
                        image: action.data.image,
                        salesPrice: action.data.salesPrice,
                        packingType: action.data.packingType,
                    })
                }
        }
        default: {
            return state;
        }
    }
}

export default BasketReducer;