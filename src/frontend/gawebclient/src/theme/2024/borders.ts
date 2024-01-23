const bordersDef = {
    borderWidths: [0, 1, 2, 4, 8],
    borderStyles: {
        solid: 'solid',
        dotted: 'dotted',
        dashed: 'dashed',
        none: 'none',
    },
    radius: [0, 2, 4, 8, 16],
};

export type Borders = typeof bordersDef;