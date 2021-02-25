export interface Props {
    text: string;
    x: number;
    y: number;
    clicked: (x: number, y: number) => void;
}