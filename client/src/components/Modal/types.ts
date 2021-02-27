export interface Props {
    text: string;
    clicked: (event: React.MouseEvent<HTMLDivElement>) => void;
}