// import { useEffect } from "react";
import AppLayout from "./layouts/AppLayout";
import Routes from "./routes/Routes";
// import "./App.css";

function App() {

	const object = [
		{
			name: "Mohit",
			id: 1,
			pId: "123",
			age: 28,
			city: "Mathura",
			content: {
				ph: "542",
				lang: "sp"
			}

		},
		{
			id: 2,
			name: "Mohit",
			pId: "123",
			age: 28,
			city: "Mathura",
			content: {
				ph: "123",
				lang: "en"
			}
		},
		{
			id: 3,
			name: "Mohit",
			pId: "123",
			age: 28,
			city: "Mathura",
			content: {
				ph: "234",
				lang: "en"
			}
		},
		{
			id: 4,
			name: "Mohit",
			pId: "123",
			age: 28,
			city: "Mathura",
			content: {
				ph: "142",
				lang: "en"
			}
		},
		{
			id: 5,
			name: "Rohit",
			pId: "123",
			age: 28,
			city: "Mathura",
			content: {
				ph: "2222",
				lang: "en"
			}
		}
	];

	const object2 = [
		{
			content: {
				name: "Rohit",
			}
		}
	];

	console.log(object, object2);
	const fields = ["ph", "lang"];

	function findValue() {
		for (let index = 0; index < object.length; index++) {
			const get = fields.every((item) => (object[index].content[item] || object[index].content[item] == ""));

			console.log(get);
		}
	}


	// const find = fields.every((el) => object2.find((ob) => ob.content[el]));
	console.log(findValue());

	let batchItemIndex = 0, batchSize = 2, batchCount = 0;
	// let newArr = {};
	const tempMap = new Map();
	const mapKey = [];
	for (let index = 0; index < object.length; index++) {
		mapKey[index] = {
			id: object[index].id,
			pId: object[index].pId,
		};
		tempMap.set(mapKey[index], {
			name: object[index].name,
			age: object[index].age,
		});

		fields.forEach(element => {
			const getMap = tempMap.get(mapKey[index]);
			tempMap.set(mapKey[index], {
				content: {
					...getMap.content,
					[element]:  object[index].content[element]
				}
			});

			
			// if (!newArr[index.id] && newArr[index.id].content[element]) {
			// 	newArr = {
			// 		...newArr,
			// 		[index.id]: {
			// 			content: {
			// 				[element]: object[index].content[element]
			// 			}
			// 		},
			// 	};
			// 	batchItemIndex++;
			// }
		});
		// batchItemIndex++;
		console.log(batchItemIndex, tempMap);

		if (tempMap.size === batchSize || index === object.length - 1) {
			batchCount++;
			console.log("batch = "+ batchCount);
			for (let indexBatch = index - (batchSize - 1); indexBatch <= index; indexBatch++) {
	
				console.log(mapKey);
				console.log(tempMap.get(mapKey[indexBatch]));
			}
		}
		
		// if (batchItemIndex === batchSize || index === object.length - 1) {
		// 	const ls = JSON.parse(localStorage.getItem("obj")) || [];
		// 	ls.push(newArr);
		// 	localStorage.setItem("obj", JSON.stringify(ls));
		// 	batchItemIndex = 0;
		// 	newArr = [];
		// 	batchCount++;
		// }

		if (batchCount === Math.ceil(object.length/batchSize)) {
			console.log("done");
		}
		
	}

	const tem = "";
	console.log(tem.split(","));

	// const mapKey = {
	// 	id: 1,
	// 	pId: "123"
	// };

	// {
	// 	"pId": {

	// 	}
	// }
	// tempMap.set("john", 123);

	// console.log("map", tempMap);
	// console.log(mapKey, tempMap.get("john"));



	
	return (
		<AppLayout>
			<Routes />
		</AppLayout>
	);
}

export default App;
