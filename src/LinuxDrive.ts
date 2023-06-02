import { IDrive } from "./IDrive";

export class LinuxDrive implements IDrive {
    public list: IDrive["list"] = async () => {
        return []
    }

    public setMeta: IDrive["setMeta"] = async () => {
        return
    }
}