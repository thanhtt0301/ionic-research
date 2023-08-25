import {
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonList,
	IonItem,
	IonGrid,
	IonRow,
} from "@ionic/react";
import "./Tab3.css";

const Tab3: React.FC = () => {
	const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

	return (
		<>
			<IonContent scrollX={true}>
				{/* <div style={{ display: "flex", flexDirection: "row" }}> */}
				{/* Add your horizontally scrollable content here */}
				<div
					style={{ width: "100%", minWidth: "1000px", whiteSpace: "nowrap" }}
				>
					<IonList>
						{items.map((item, index) => (
							<IonItem key={index} className='list-item'>
								{item}
							</IonItem>
						))}
					</IonList>
				</div>
				{/* </div> */}
			</IonContent>
		</>
	);
};

export default Tab3;
