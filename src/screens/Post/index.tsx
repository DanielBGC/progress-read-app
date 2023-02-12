import { useState, useRef } from "react";
import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import { ProgressBar } from "../../components/ProgressBar";
import { styles } from "./styles";

type ScrollProps = {
	layoutMeasurement: {
		height: number;
	};

	contentOffset: {
		y: number;
	};

	contentSize: {
		height: number;
	};
}

export function Post() {

	const [percentageScroll, setPercentageScroll] = useState(0);

	const scrollRef = useRef<ScrollView>(null);

	const dimensions = useWindowDimensions();

	function scrollPercentage({ layoutMeasurement, contentOffset, contentSize }: ScrollProps) {
		const visibleContent = Math.ceil((dimensions.height / contentSize.height) * 100);

		// const value = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100

		// const value2 = (contentOffset.y / contentSize.height) * 100;

		// setPercentageScroll(value < visibleContent + 1? 0 : value);

		const value3 = ((contentOffset.y  / contentSize.height) * 100) * (1.14 + (visibleContent / 100));
		setPercentageScroll(Math.abs(value3));
	}

	function handleScrollMoveTop() {
		scrollRef.current?.scrollTo({
			x: 0,
			y: 0,
			animated: true
		})
	}

	return (
		<View style={styles.container}>
			<ScrollView 
				ref={scrollRef}
				showsVerticalScrollIndicator={true}
				contentContainerStyle={styles.content}
				onScroll={(event) => { scrollPercentage(event.nativeEvent) }}
				scrollEventThrottle={16}
			>
				<Text style={styles.title}>
					Lorem ipsum
				</Text>

				<View>
					<Text style={styles.text}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, officiis ratione corporis eaque beatae reiciendis adipisci placeat hic magnam saepe sunt culpa est laudantium sed blanditiis consectetur, possimus cupiditate voluptate!
					</Text>

					<Text style={styles.text}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, officiis ratione corporis eaque beatae reiciendis adipisci placeat hic magnam saepe sunt culpa est laudantium sed blanditiis consectetur, possimus cupiditate voluptate!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam autem blanditiis maxime expedita dignissimos fuga harum saepe architecto magni ipsum a aperiam animi numquam officiis illum perferendis, ipsa minima.
					</Text>
					
					<Text style={styles.text}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, officiis ratione corporis eaque beatae reiciendis adipisci placeat hic magnam saepe sunt culpa est laudantium sed blanditiis consectetur, possimus cupiditate voluptate!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam autem blanditiis maxime expedita dignissimos fuga harum saepe architecto magni ipsum a aperiam animi numquam officiis illum perferendis, ipsa minima.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit soluta odio, unde ex qui corporis, molestiae atque nulla eum aliquid itaque dolorum? Non expedita dolores blanditiis! Nemo animi esse consequuntur.
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, officiis ratione corporis eaque beatae reiciendis adipisci placeat hic magnam saepe sunt culpa est laudantium sed blanditiis consectetur, possimus cupiditate voluptate!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam autem blanditiis maxime expedita dignissimos fuga harum saepe architecto magni ipsum a aperiam animi numquam officiis illum perferendis, ipsa minima.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit soluta odio, unde ex qui corporis, molestiae atque nulla eum aliquid itaque dolorum? Non expedita dolores blanditiis! Nemo animi esse consequuntur.
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, officiis ratione corporis eaque beatae reiciendis adipisci placeat hic magnam saepe sunt culpa est laudantium sed blanditiis consectetur, possimus cupiditate voluptate!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam autem blanditiis maxime expedita dignissimos fuga harum saepe architecto magni ipsum a aperiam animi numquam officiis illum perferendis, ipsa minima.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit soluta odio, unde ex qui corporis, molestiae atque nulla eum aliquid itaque dolorum? Non expedita dolores blanditiis! Nemo animi esse consequuntur.
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, officiis ratione corporis eaque beatae reiciendis adipisci placeat hic magnam saepe sunt culpa est laudantium sed blanditiis consectetur, possimus cupiditate voluptate!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam autem blanditiis maxime expedita dignissimos fuga harum saepe architecto magni ipsum a aperiam animi numquam officiis illum perferendis, ipsa minima.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit soluta odio, unde ex qui corporis, molestiae atque nulla eum aliquid itaque dolorum? Non expedita dolores blanditiis! Nemo animi esse consequuntur.
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, officiis ratione corporis eaque beatae reiciendis adipisci placeat hic magnam saepe sunt culpa est laudantium sed blanditiis consectetur, possimus cupiditate voluptate!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam autem blanditiis maxime expedita dignissimos fuga harum saepe architecto magni ipsum a aperiam animi numquam officiis illum perferendis, ipsa minima.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit soluta odio, unde ex qui corporis, molestiae atque nulla eum aliquid itaque dolorum? Non expedita dolores blanditiis! Nemo animi esse consequuntur.
					</Text>

					<Text style={styles.text}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, officiis ratione corporis eaque beatae reiciendis adipisci placeat hic magnam saepe sunt culpa est laudantium sed blanditiis consectetur, possimus cupiditate voluptate!
					</Text>
				</View>
			</ScrollView>

			<ProgressBar value={percentageScroll} onMoveTop={handleScrollMoveTop}/>
		</View>
	);
}