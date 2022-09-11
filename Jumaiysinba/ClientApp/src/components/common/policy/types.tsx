export interface PolicyParameters {
    onChangePolicy: (e: React.ChangeEvent<HTMLInputElement>) => void;
    header: string;
    explain: string;
    borderColor: string;
    logo: string;
    isLeft: boolean
}