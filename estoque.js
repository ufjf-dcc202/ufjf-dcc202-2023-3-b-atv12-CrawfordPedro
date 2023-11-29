let estoque = {
    'joao': {
        'maca': 1,
        'banana': 2
    },
    'maria': {
        'maca': 1,
        'pera': 3
    }
};

function getEstoque() {
    return structedClone(estoque);
}

export {getEstoque};