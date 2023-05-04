import { before } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";

const Messages = findByProps("sendMessage", "receiveMessage");
const patches = [];
export default {
    onLoad: () => {
        patches.push(before("sendMessage", Messages, (args) => {
            const new_content = args[1].content.replaceAll("な", "にゃ");
            args[1].content = new_content;
        }));
    },
    onUnload: () => {
        patches.forEach(unpatch => unpatch());
    }
}