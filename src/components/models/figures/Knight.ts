import { Cell } from './../Cell';
import { Colors } from './../Colors';
import { Figure, FigureName } from "./Figure";
import blacklogo from "../../../assets/black-knight.png"
import whitelogo from "../../../assets/white-knight.png"

export class Knight extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureName.KNIGHT;
    }
}