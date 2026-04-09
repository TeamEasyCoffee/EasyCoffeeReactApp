import BeanIcon from "@/assets/icons/coffee-bean.svg";
import { Star } from "lucide-react-native";
import { View } from "react-native";
/**
 *  0/5 评分组件
 * @param selectType 0  烘焙表 / 1  星评价表
 * @param source  0~5 分数
 * @returns
 */
type StarsProps = {
    selectType: number;
    source: number;
};

export default function stars({ selectType, source }: StarsProps) {
    const rostColorList = [
        "#D2B17F",
        "#B78E5E",
        "#976A41",
        "#6E4327",
        "#482B19",
    ];
    let emptyStar = 5 - source;
    const outNodes: any = [];
    switch (selectType) {
        case 0:
            for (var i = 0; i < source; i++) {
                outNodes.push(
                    <Star
                        fill={"#F59E0B"}
                        strokeWidth={0}
                        key={"filled" + i}
                    ></Star>,
                );
            }
            for (var i = 0; i < emptyStar; i++) {
                outNodes.push(
                    <Star
                        fill={"#BDBDBD"}
                        strokeWidth={0}
                        key={"empty" + i}
                    ></Star>,
                );
            }
            break;
        case 1:
            for (var i = 0; i < source; i++) {
                outNodes.push(
                    <BeanIcon
                        fill={rostColorList[i]}
                        className="w-6 h-6 "
                        key={"filled" + i}
                    ></BeanIcon>,
                );
            }
            for (var i = 0; i < emptyStar; i++) {
                outNodes.push(
                    <BeanIcon fill={"#BDBDBD"} key={"empty" + i}></BeanIcon>,
                );
            }
            break;
    }
    return <View className="flex flex-row starContainer ">{outNodes}</View>;
}
