import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import PinchZoomView from 'react-native-pinch-zoom-view';
const {width, height} = Dimensions.get('window');
export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			scale: 1,
			scale0: 1,
			width0: 0,
			widthAfter: 0,
			tileanh: 0,
			// anh doc
			// imgUrl: 'https://b.zmtcdn.com/data/menus/480/18401480/b6634a2cd7bca64a7a0d00a46c4d8099.jpg'
			// anh ngang
			imgUrl: 'https://previews.123rf.com/images/kaisorn/kaisorn1605/kaisorn160500023/58388053-japanese-food-menu-restaurant-brochure-design-template.jpg'
		};
	}
	componentDidMount() {
		Image.getSize(this.state.imgUrl, (width, height) => {
			this.setState({width0: width});
			this.setState({tileanh: width/height});
			console.log(this.state.tileanh);
		}, (err) => {
			console.log(err)
		});
	}

	render() {
		const payments = [];
		let api = {
			"textAnnotations": [
				{
					"locale": "en",
					"description": "Invalid key hash. The key hash KatJlU+7mVICRKzb3BogrhFDBTM\n",
					"boundingPoly": {
						"vertices": [
							{
								"x": 4,
								"y": 1
							},
							{
								"x": 264,
								"y": 1
							},
							{
								"x": 264,
								"y": 12
							},
							{
								"x": 4,
								"y": 12
							}
						]
					}
				},
				{
					"description": "Invalid",
					"boundingPoly": {
						"vertices": [
							{
								"x": 4,
								"y": 1
							},
							{
								"x": 29,
								"y": 1
							},
							{
								"x": 29,
								"y": 12
							},
							{
								"x": 4,
								"y": 12
							}
						]
					}
				},
				{
					"description": "key",
					"boundingPoly": {
						"vertices": [
							{
								"x": 32,
								"y": 1
							},
							{
								"x": 45,
								"y": 1
							},
							{
								"x": 45,
								"y": 12
							},
							{
								"x": 32,
								"y": 12
							}
						]
					}
				},
				{
					"description": "hash",
					"boundingPoly": {
						"vertices": [
							{
								"x": 49,
								"y": 1
							},
							{
								"x": 66,
								"y": 1
							},
							{
								"x": 66,
								"y": 12
							},
							{
								"x": 49,
								"y": 12
							}
						]
					}
				},
				{
					"description": ".",
					"boundingPoly": {
						"vertices": [
							{
								"x": 69,
								"y": 1
							},
							{
								"x": 71,
								"y": 1
							},
							{
								"x": 71,
								"y": 12
							},
							{
								"x": 69,
								"y": 12
							}
						]
					}
				},
				{
					"description": "The",
					"boundingPoly": {
						"vertices": [
							{
								"x": 76,
								"y": 1
							},
							{
								"x": 89,
								"y": 1
							},
							{
								"x": 89,
								"y": 12
							},
							{
								"x": 76,
								"y": 12
							}
						]
					}
				},
				{
					"description": "key",
					"boundingPoly": {
						"vertices": [
							{
								"x": 91,
								"y": 1
							},
							{
								"x": 104,
								"y": 1
							},
							{
								"x": 104,
								"y": 12
							},
							{
								"x": 91,
								"y": 12
							}
						]
					}
				},
				{
					"description": "hash",
					"boundingPoly": {
						"vertices": [
							{
								"x": 109,
								"y": 1
							},
							{
								"x": 125,
								"y": 1
							},
							{
								"x": 125,
								"y": 12
							},
							{
								"x": 109,
								"y": 12
							}
						]
					}
				},
				{
					"description": "KatJlU",
					"boundingPoly": {
						"vertices": [
							{
								"x": 129,
								"y": 1
							},
							{
								"x": 153,
								"y": 1
							},
							{
								"x": 153,
								"y": 12
							},
							{
								"x": 129,
								"y": 12
							}
						]
					}
				},
				{
					"description": "+",
					"boundingPoly": {
						"vertices": [
							{
								"x": 158,
								"y": 1
							},
							{
								"x": 160,
								"y": 1
							},
							{
								"x": 160,
								"y": 12
							},
							{
								"x": 158,
								"y": 12
							}
						]
					}
				},
				{
					"description": "7mVICRKzb3BogrhFDBTM",
					"boundingPoly": {
						"vertices": [
							{
								"x": 162,
								"y": 1
							},
							{
								"x": 264,
								"y": 1
							},
							{
								"x": 264,
								"y": 12
							},
							{
								"x": 162,
								"y": 12
							}
						]
					}
				}
			]
		};

		let api2 = { "textAnnotations": [
				{
					"locale": "la",
					"description": "APPETIZER\nSUSHI\nMENU\nLorem ipsum dolor sit amet\nLorem ipsum dolor sit amet\nLorem ipsum dolor sit amet\nconsectetur adipiscing elit\nVestibulum et placerat elit\nRESTAURANT\nJAPANESE FOOD\nLorem ipsum dolor sit\nconsectetur adipiscing elit\nVestibulum et placerat elit\nCurabitur vel\nLorem ipsum dolor sit\nconsectetur adipiscing elit\nEtiam.......20$\nBEST CHOICE\nBEVERAGES\nNOODLE SOUP\nLorem ipsum dolor sit\nconsectetur adipiscing elit\nVestibulum et placerat elit\nCurabitur vel\nLorem ipsum dolor sit\nconsectetur adipiscing elit\nCurabitur vel\nLorem ipsum dolor sit\nconsectetur adipiscing elit\nVestibulum et placerat elit\nEtiam.......20$\nOOO\n",
					"boundingPoly": {
						"vertices": [
							{
								"x": 72,
								"y": 85
							},
							{
								"x": 1164,
								"y": 85
							},
							{
								"x": 1164,
								"y": 745
							},
							{
								"x": 72,
								"y": 745
							}
						]
					}
				},
				{
					"description": "APPETIZER",
					"boundingPoly": {
						"vertices": [
							{
								"x": 121,
								"y": 85
							},
							{
								"x": 258,
								"y": 85
							},
							{
								"x": 258,
								"y": 116
							},
							{
								"x": 121,
								"y": 116
							}
						]
					}
				},
				{
					"description": "SUSHI",
					"boundingPoly": {
						"vertices": [
							{
								"x": 955,
								"y": 85
							},
							{
								"x": 1035,
								"y": 85
							},
							{
								"x": 1035,
								"y": 116
							},
							{
								"x": 955,
								"y": 116
							}
						]
					}
				},
				{
					"description": "MENU",
					"boundingPoly": {
						"vertices": [
							{
								"x": 518,
								"y": 87
							},
							{
								"x": 766,
								"y": 87
							},
							{
								"x": 766,
								"y": 216
							},
							{
								"x": 518,
								"y": 216
							}
						]
					}
				},
				{
					"description": "Lorem",
					"boundingPoly": {
						"vertices": [
							{
								"x": 950,
								"y": 165
							},
							{
								"x": 990,
								"y": 165
							},
							{
								"x": 990,
								"y": 185
							},
							{
								"x": 950,
								"y": 185
							}
						]
					}
				},
				{
					"description": "ipsum",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1004,
								"y": 165
							},
							{
								"x": 1044,
								"y": 165
							},
							{
								"x": 1044,
								"y": 185
							},
							{
								"x": 1004,
								"y": 185
							}
						]
					}
				},
				{
					"description": "dolor",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1057,
								"y": 165
							},
							{
								"x": 1097,
								"y": 165
							},
							{
								"x": 1097,
								"y": 185
							},
							{
								"x": 1057,
								"y": 185
							}
						]
					}
				},
				{
					"description": "sit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1103,
								"y": 165
							},
							{
								"x": 1119,
								"y": 165
							},
							{
								"x": 1119,
								"y": 185
							},
							{
								"x": 1103,
								"y": 185
							}
						]
					}
				},
				{
					"description": "amet",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1125,
								"y": 165
							},
							{
								"x": 1164,
								"y": 165
							},
							{
								"x": 1164,
								"y": 185
							},
							{
								"x": 1125,
								"y": 185
							}
						]
					}
				},
				{
					"description": "Lorem",
					"boundingPoly": {
						"vertices": [
							{
								"x": 112,
								"y": 164
							},
							{
								"x": 155,
								"y": 164
							},
							{
								"x": 155,
								"y": 185
							},
							{
								"x": 112,
								"y": 185
							}
						]
					}
				},
				{
					"description": "ipsum",
					"boundingPoly": {
						"vertices": [
							{
								"x": 167,
								"y": 164
							},
							{
								"x": 208,
								"y": 164
							},
							{
								"x": 208,
								"y": 185
							},
							{
								"x": 167,
								"y": 185
							}
						]
					}
				},
				{
					"description": "dolor",
					"boundingPoly": {
						"vertices": [
							{
								"x": 220,
								"y": 164
							},
							{
								"x": 261,
								"y": 164
							},
							{
								"x": 261,
								"y": 185
							},
							{
								"x": 220,
								"y": 185
							}
						]
					}
				},
				{
					"description": "sit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 266,
								"y": 164
							},
							{
								"x": 284,
								"y": 164
							},
							{
								"x": 284,
								"y": 185
							},
							{
								"x": 266,
								"y": 185
							}
						]
					}
				},
				{
					"description": "amet",
					"boundingPoly": {
						"vertices": [
							{
								"x": 290,
								"y": 164
							},
							{
								"x": 329,
								"y": 164
							},
							{
								"x": 329,
								"y": 185
							},
							{
								"x": 290,
								"y": 185
							}
						]
					}
				},
				{
					"description": "Lorem",
					"boundingPoly": {
						"vertices": [
							{
								"x": 126,
								"y": 196
							},
							{
								"x": 160,
								"y": 196
							},
							{
								"x": 160,
								"y": 215
							},
							{
								"x": 126,
								"y": 215
							}
						]
					}
				},
				{
					"description": "ipsum",
					"boundingPoly": {
						"vertices": [
							{
								"x": 169,
								"y": 196
							},
							{
								"x": 202,
								"y": 196
							},
							{
								"x": 202,
								"y": 215
							},
							{
								"x": 169,
								"y": 215
							}
						]
					}
				},
				{
					"description": "dolor",
					"boundingPoly": {
						"vertices": [
							{
								"x": 212,
								"y": 196
							},
							{
								"x": 246,
								"y": 196
							},
							{
								"x": 246,
								"y": 215
							},
							{
								"x": 212,
								"y": 215
							}
						]
					}
				},
				{
					"description": "sit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 249,
								"y": 196
							},
							{
								"x": 263,
								"y": 196
							},
							{
								"x": 263,
								"y": 215
							},
							{
								"x": 249,
								"y": 215
							}
						]
					}
				},
				{
					"description": "amet",
					"boundingPoly": {
						"vertices": [
							{
								"x": 269,
								"y": 196
							},
							{
								"x": 302,
								"y": 196
							},
							{
								"x": 302,
								"y": 215
							},
							{
								"x": 269,
								"y": 215
							}
						]
					}
				},
				{
					"description": "consectetur",
					"boundingPoly": {
						"vertices": [
							{
								"x": 129,
								"y": 220
							},
							{
								"x": 202,
								"y": 220
							},
							{
								"x": 202,
								"y": 241
							},
							{
								"x": 129,
								"y": 241
							}
						]
					}
				},
				{
					"description": "adipiscing",
					"boundingPoly": {
						"vertices": [
							{
								"x": 205,
								"y": 220
							},
							{
								"x": 268,
								"y": 220
							},
							{
								"x": 268,
								"y": 241
							},
							{
								"x": 205,
								"y": 241
							}
						]
					}
				},
				{
					"description": "elit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 273,
								"y": 220
							},
							{
								"x": 293,
								"y": 220
							},
							{
								"x": 293,
								"y": 241
							},
							{
								"x": 273,
								"y": 241
							}
						]
					}
				},
				{
					"description": "Vestibulum",
					"boundingPoly": {
						"vertices": [
							{
								"x": 126,
								"y": 245
							},
							{
								"x": 191,
								"y": 245
							},
							{
								"x": 191,
								"y": 265
							},
							{
								"x": 126,
								"y": 265
							}
						]
					}
				},
				{
					"description": "et",
					"boundingPoly": {
						"vertices": [
							{
								"x": 203,
								"y": 245
							},
							{
								"x": 213,
								"y": 245
							},
							{
								"x": 213,
								"y": 265
							},
							{
								"x": 203,
								"y": 265
							}
						]
					}
				},
				{
					"description": "placerat",
					"boundingPoly": {
						"vertices": [
							{
								"x": 220,
								"y": 245
							},
							{
								"x": 268,
								"y": 245
							},
							{
								"x": 268,
								"y": 265
							},
							{
								"x": 220,
								"y": 265
							}
						]
					}
				},
				{
					"description": "elit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 274,
								"y": 245
							},
							{
								"x": 293,
								"y": 245
							},
							{
								"x": 293,
								"y": 265
							},
							{
								"x": 274,
								"y": 265
							}
						]
					}
				},
				{
					"description": "RESTAURANT",
					"boundingPoly": {
						"vertices": [
							{
								"x": 518,
								"y": 227
							},
							{
								"x": 781,
								"y": 227
							},
							{
								"x": 781,
								"y": 269
							},
							{
								"x": 518,
								"y": 269
							}
						]
					}
				},
				{
					"description": "JAPANESE",
					"boundingPoly": {
						"vertices": [
							{
								"x": 510,
								"y": 283
							},
							{
								"x": 686,
								"y": 283
							},
							{
								"x": 686,
								"y": 331
							},
							{
								"x": 510,
								"y": 331
							}
						]
					}
				},
				{
					"description": "FOOD",
					"boundingPoly": {
						"vertices": [
							{
								"x": 704,
								"y": 283
							},
							{
								"x": 798,
								"y": 283
							},
							{
								"x": 798,
								"y": 331
							},
							{
								"x": 704,
								"y": 331
							}
						]
					}
				},
				{
					"description": "Lorem",
					"boundingPoly": {
						"vertices": [
							{
								"x": 971,
								"y": 206
							},
							{
								"x": 1001,
								"y": 206
							},
							{
								"x": 1001,
								"y": 225
							},
							{
								"x": 971,
								"y": 225
							}
						]
					}
				},
				{
					"description": "ipsum",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1013,
								"y": 206
							},
							{
								"x": 1046,
								"y": 206
							},
							{
								"x": 1046,
								"y": 225
							},
							{
								"x": 1013,
								"y": 225
							}
						]
					}
				},
				{
					"description": "dolor",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1056,
								"y": 206
							},
							{
								"x": 1089,
								"y": 206
							},
							{
								"x": 1089,
								"y": 225
							},
							{
								"x": 1056,
								"y": 225
							}
						]
					}
				},
				{
					"description": "sit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1093,
								"y": 206
							},
							{
								"x": 1107,
								"y": 206
							},
							{
								"x": 1107,
								"y": 225
							},
							{
								"x": 1093,
								"y": 225
							}
						]
					}
				},
				{
					"description": "consectetur",
					"boundingPoly": {
						"vertices": [
							{
								"x": 973,
								"y": 230
							},
							{
								"x": 1045,
								"y": 230
							},
							{
								"x": 1045,
								"y": 251
							},
							{
								"x": 973,
								"y": 251
							}
						]
					}
				},
				{
					"description": "adipiscing",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1049,
								"y": 230
							},
							{
								"x": 1111,
								"y": 230
							},
							{
								"x": 1111,
								"y": 251
							},
							{
								"x": 1049,
								"y": 251
							}
						]
					}
				},
				{
					"description": "elit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1117,
								"y": 230
							},
							{
								"x": 1137,
								"y": 230
							},
							{
								"x": 1137,
								"y": 251
							},
							{
								"x": 1117,
								"y": 251
							}
						]
					}
				},
				{
					"description": "Vestibulum",
					"boundingPoly": {
						"vertices": [
							{
								"x": 970,
								"y": 255
							},
							{
								"x": 1035,
								"y": 255
							},
							{
								"x": 1035,
								"y": 275
							},
							{
								"x": 970,
								"y": 275
							}
						]
					}
				},
				{
					"description": "et",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1047,
								"y": 255
							},
							{
								"x": 1057,
								"y": 255
							},
							{
								"x": 1057,
								"y": 275
							},
							{
								"x": 1047,
								"y": 275
							}
						]
					}
				},
				{
					"description": "placerat",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1064,
								"y": 255
							},
							{
								"x": 1112,
								"y": 255
							},
							{
								"x": 1112,
								"y": 275
							},
							{
								"x": 1064,
								"y": 275
							}
						]
					}
				},
				{
					"description": "elit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1118,
								"y": 255
							},
							{
								"x": 1137,
								"y": 255
							},
							{
								"x": 1137,
								"y": 275
							},
							{
								"x": 1118,
								"y": 275
							}
						]
					}
				},
				{
					"description": "Curabitur",
					"boundingPoly": {
						"vertices": [
							{
								"x": 971,
								"y": 280
							},
							{
								"x": 1029,
								"y": 280
							},
							{
								"x": 1029,
								"y": 301
							},
							{
								"x": 971,
								"y": 301
							}
						]
					}
				},
				{
					"description": "vel",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1031,
								"y": 280
							},
							{
								"x": 1053,
								"y": 280
							},
							{
								"x": 1053,
								"y": 301
							},
							{
								"x": 1031,
								"y": 301
							}
						]
					}
				},
				{
					"description": "Lorem",
					"boundingPoly": {
						"vertices": [
							{
								"x": 971,
								"y": 307
							},
							{
								"x": 1001,
								"y": 307
							},
							{
								"x": 1001,
								"y": 328
							},
							{
								"x": 971,
								"y": 328
							}
						]
					}
				},
				{
					"description": "ipsum",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1014,
								"y": 307
							},
							{
								"x": 1046,
								"y": 307
							},
							{
								"x": 1046,
								"y": 328
							},
							{
								"x": 1014,
								"y": 328
							}
						]
					}
				},
				{
					"description": "dolor",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1056,
								"y": 307
							},
							{
								"x": 1089,
								"y": 307
							},
							{
								"x": 1089,
								"y": 328
							},
							{
								"x": 1056,
								"y": 328
							}
						]
					}
				},
				{
					"description": "sit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1095,
								"y": 307
							},
							{
								"x": 1107,
								"y": 307
							},
							{
								"x": 1107,
								"y": 328
							},
							{
								"x": 1095,
								"y": 328
							}
						]
					}
				},
				{
					"description": "consectetur",
					"boundingPoly": {
						"vertices": [
							{
								"x": 971,
								"y": 332
							},
							{
								"x": 1044,
								"y": 332
							},
							{
								"x": 1044,
								"y": 351
							},
							{
								"x": 971,
								"y": 351
							}
						]
					}
				},
				{
					"description": "adipiscing",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1049,
								"y": 332
							},
							{
								"x": 1110,
								"y": 332
							},
							{
								"x": 1110,
								"y": 351
							},
							{
								"x": 1049,
								"y": 351
							}
						]
					}
				},
				{
					"description": "elit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1117,
								"y": 332
							},
							{
								"x": 1135,
								"y": 332
							},
							{
								"x": 1135,
								"y": 351
							},
							{
								"x": 1117,
								"y": 351
							}
						]
					}
				},
				{
					"description": "Etiam",
					"boundingPoly": {
						"vertices": [
							{
								"x": 128,
								"y": 289
							},
							{
								"x": 179,
								"y": 289
							},
							{
								"x": 179,
								"y": 318
							},
							{
								"x": 128,
								"y": 318
							}
						]
					}
				},
				{
					"description": ".",
					"boundingPoly": {
						"vertices": [
							{
								"x": 189,
								"y": 289
							},
							{
								"x": 197,
								"y": 289
							},
							{
								"x": 197,
								"y": 318
							},
							{
								"x": 189,
								"y": 318
							}
						]
					}
				},
				{
					"description": ".",
					"boundingPoly": {
						"vertices": [
							{
								"x": 195,
								"y": 289
							},
							{
								"x": 203,
								"y": 289
							},
							{
								"x": 203,
								"y": 318
							},
							{
								"x": 195,
								"y": 318
							}
						]
					}
				},
				{
					"description": ".",
					"boundingPoly": {
						"vertices": [
							{
								"x": 201,
								"y": 289
							},
							{
								"x": 209,
								"y": 289
							},
							{
								"x": 209,
								"y": 318
							},
							{
								"x": 201,
								"y": 318
							}
						]
					}
				},
				{
					"description": ".",
					"boundingPoly": {
						"vertices": [
							{
								"x": 207,
								"y": 289
							},
							{
								"x": 215,
								"y": 289
							},
							{
								"x": 215,
								"y": 318
							},
							{
								"x": 207,
								"y": 318
							}
						]
					}
				},
				{
					"description": ".",
					"boundingPoly": {
						"vertices": [
							{
								"x": 213,
								"y": 289
							},
							{
								"x": 221,
								"y": 289
							},
							{
								"x": 221,
								"y": 318
							},
							{
								"x": 213,
								"y": 318
							}
						]
					}
				},
				{
					"description": ".",
					"boundingPoly": {
						"vertices": [
							{
								"x": 219,
								"y": 289
							},
							{
								"x": 227,
								"y": 289
							},
							{
								"x": 227,
								"y": 318
							},
							{
								"x": 219,
								"y": 318
							}
						]
					}
				},
				{
					"description": ".",
					"boundingPoly": {
						"vertices": [
							{
								"x": 225,
								"y": 289
							},
							{
								"x": 233,
								"y": 289
							},
							{
								"x": 233,
								"y": 318
							},
							{
								"x": 225,
								"y": 318
							}
						]
					}
				},
				{
					"description": "20",
					"boundingPoly": {
						"vertices": [
							{
								"x": 233,
								"y": 289
							},
							{
								"x": 254,
								"y": 289
							},
							{
								"x": 254,
								"y": 318
							},
							{
								"x": 233,
								"y": 318
							}
						]
					}
				},
				{
					"description": "$",
					"boundingPoly": {
						"vertices": [
							{
								"x": 261,
								"y": 289
							},
							{
								"x": 269,
								"y": 289
							},
							{
								"x": 269,
								"y": 318
							},
							{
								"x": 261,
								"y": 318
							}
						]
					}
				},
				{
					"description": "BEST",
					"boundingPoly": {
						"vertices": [
							{
								"x": 171,
								"y": 412
							},
							{
								"x": 229,
								"y": 412
							},
							{
								"x": 229,
								"y": 442
							},
							{
								"x": 171,
								"y": 442
							}
						]
					}
				},
				{
					"description": "CHOICE",
					"boundingPoly": {
						"vertices": [
							{
								"x": 236,
								"y": 412
							},
							{
								"x": 319,
								"y": 412
							},
							{
								"x": 319,
								"y": 442
							},
							{
								"x": 236,
								"y": 442
							}
						]
					}
				},
				{
					"description": "BEVERAGES",
					"boundingPoly": {
						"vertices": [
							{
								"x": 523,
								"y": 404
							},
							{
								"x": 670,
								"y": 404
							},
							{
								"x": 670,
								"y": 434
							},
							{
								"x": 523,
								"y": 434
							}
						]
					}
				},
				{
					"description": "NOODLE",
					"boundingPoly": {
						"vertices": [
							{
								"x": 958,
								"y": 432
							},
							{
								"x": 1056,
								"y": 432
							},
							{
								"x": 1056,
								"y": 464
							},
							{
								"x": 958,
								"y": 464
							}
						]
					}
				},
				{
					"description": "SOUP",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1068,
								"y": 432
							},
							{
								"x": 1125,
								"y": 432
							},
							{
								"x": 1125,
								"y": 464
							},
							{
								"x": 1068,
								"y": 464
							}
						]
					}
				},
				{
					"description": "Lorem",
					"boundingPoly": {
						"vertices": [
							{
								"x": 73,
								"y": 496
							},
							{
								"x": 103,
								"y": 496
							},
							{
								"x": 103,
								"y": 519
							},
							{
								"x": 73,
								"y": 519
							}
						]
					}
				},
				{
					"description": "ipsum",
					"boundingPoly": {
						"vertices": [
							{
								"x": 117,
								"y": 496
							},
							{
								"x": 148,
								"y": 496
							},
							{
								"x": 148,
								"y": 519
							},
							{
								"x": 117,
								"y": 519
							}
						]
					}
				},
				{
					"description": "dolor",
					"boundingPoly": {
						"vertices": [
							{
								"x": 158,
								"y": 496
							},
							{
								"x": 193,
								"y": 496
							},
							{
								"x": 193,
								"y": 519
							},
							{
								"x": 158,
								"y": 519
							}
						]
					}
				},
				{
					"description": "sit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 196,
								"y": 496
							},
							{
								"x": 209,
								"y": 496
							},
							{
								"x": 209,
								"y": 519
							},
							{
								"x": 196,
								"y": 519
							}
						]
					}
				},
				{
					"description": "consectetur",
					"boundingPoly": {
						"vertices": [
							{
								"x": 72,
								"y": 522
							},
							{
								"x": 148,
								"y": 522
							},
							{
								"x": 148,
								"y": 542
							},
							{
								"x": 72,
								"y": 542
							}
						]
					}
				},
				{
					"description": "adipiscing",
					"boundingPoly": {
						"vertices": [
							{
								"x": 149,
								"y": 522
							},
							{
								"x": 215,
								"y": 522
							},
							{
								"x": 215,
								"y": 542
							},
							{
								"x": 149,
								"y": 542
							}
						]
					}
				},
				{
					"description": "elit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 219,
								"y": 522
							},
							{
								"x": 238,
								"y": 522
							},
							{
								"x": 238,
								"y": 542
							},
							{
								"x": 219,
								"y": 542
							}
						]
					}
				},
				{
					"description": "Vestibulum",
					"boundingPoly": {
						"vertices": [
							{
								"x": 74,
								"y": 546
							},
							{
								"x": 139,
								"y": 546
							},
							{
								"x": 139,
								"y": 567
							},
							{
								"x": 74,
								"y": 567
							}
						]
					}
				},
				{
					"description": "et",
					"boundingPoly": {
						"vertices": [
							{
								"x": 149,
								"y": 546
							},
							{
								"x": 160,
								"y": 546
							},
							{
								"x": 160,
								"y": 567
							},
							{
								"x": 149,
								"y": 567
							}
						]
					}
				},
				{
					"description": "placerat",
					"boundingPoly": {
						"vertices": [
							{
								"x": 163,
								"y": 546
							},
							{
								"x": 215,
								"y": 546
							},
							{
								"x": 215,
								"y": 567
							},
							{
								"x": 163,
								"y": 567
							}
						]
					}
				},
				{
					"description": "elit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 219,
								"y": 546
							},
							{
								"x": 239,
								"y": 546
							},
							{
								"x": 239,
								"y": 567
							},
							{
								"x": 219,
								"y": 567
							}
						]
					}
				},
				{
					"description": "Curabitur",
					"boundingPoly": {
						"vertices": [
							{
								"x": 74,
								"y": 570
							},
							{
								"x": 133,
								"y": 571
							},
							{
								"x": 133,
								"y": 590
							},
							{
								"x": 74,
								"y": 589
							}
						]
					}
				},
				{
					"description": "vel",
					"boundingPoly": {
						"vertices": [
							{
								"x": 136,
								"y": 572
							},
							{
								"x": 154,
								"y": 572
							},
							{
								"x": 154,
								"y": 590
							},
							{
								"x": 136,
								"y": 590
							}
						]
					}
				},
				{
					"description": "Lorem",
					"boundingPoly": {
						"vertices": [
							{
								"x": 523,
								"y": 481
							},
							{
								"x": 556,
								"y": 481
							},
							{
								"x": 556,
								"y": 502
							},
							{
								"x": 523,
								"y": 502
							}
						]
					}
				},
				{
					"description": "ipsum",
					"boundingPoly": {
						"vertices": [
							{
								"x": 569,
								"y": 481
							},
							{
								"x": 598,
								"y": 481
							},
							{
								"x": 598,
								"y": 502
							},
							{
								"x": 569,
								"y": 502
							}
						]
					}
				},
				{
					"description": "dolor",
					"boundingPoly": {
						"vertices": [
							{
								"x": 611,
								"y": 481
							},
							{
								"x": 642,
								"y": 481
							},
							{
								"x": 642,
								"y": 502
							},
							{
								"x": 611,
								"y": 502
							}
						]
					}
				},
				{
					"description": "sit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 647,
								"y": 481
							},
							{
								"x": 662,
								"y": 481
							},
							{
								"x": 662,
								"y": 502
							},
							{
								"x": 647,
								"y": 502
							}
						]
					}
				},
				{
					"description": "consectetur",
					"boundingPoly": {
						"vertices": [
							{
								"x": 527,
								"y": 507
							},
							{
								"x": 599,
								"y": 507
							},
							{
								"x": 599,
								"y": 526
							},
							{
								"x": 527,
								"y": 526
							}
						]
					}
				},
				{
					"description": "adipiscing",
					"boundingPoly": {
						"vertices": [
							{
								"x": 601,
								"y": 507
							},
							{
								"x": 666,
								"y": 507
							},
							{
								"x": 666,
								"y": 526
							},
							{
								"x": 601,
								"y": 526
							}
						]
					}
				},
				{
					"description": "elit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 672,
								"y": 507
							},
							{
								"x": 690,
								"y": 507
							},
							{
								"x": 690,
								"y": 526
							},
							{
								"x": 672,
								"y": 526
							}
						]
					}
				},
				{
					"description": "Curabitur",
					"boundingPoly": {
						"vertices": [
							{
								"x": 525,
								"y": 532
							},
							{
								"x": 582,
								"y": 532
							},
							{
								"x": 582,
								"y": 552
							},
							{
								"x": 525,
								"y": 552
							}
						]
					}
				},
				{
					"description": "vel",
					"boundingPoly": {
						"vertices": [
							{
								"x": 585,
								"y": 532
							},
							{
								"x": 605,
								"y": 532
							},
							{
								"x": 605,
								"y": 552
							},
							{
								"x": 585,
								"y": 552
							}
						]
					}
				},
				{
					"description": "Lorem",
					"boundingPoly": {
						"vertices": [
							{
								"x": 969,
								"y": 509
							},
							{
								"x": 1002,
								"y": 509
							},
							{
								"x": 1002,
								"y": 530
							},
							{
								"x": 969,
								"y": 530
							}
						]
					}
				},
				{
					"description": "ipsum",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1015,
								"y": 509
							},
							{
								"x": 1044,
								"y": 509
							},
							{
								"x": 1044,
								"y": 530
							},
							{
								"x": 1015,
								"y": 530
							}
						]
					}
				},
				{
					"description": "dolor",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1057,
								"y": 509
							},
							{
								"x": 1088,
								"y": 509
							},
							{
								"x": 1088,
								"y": 530
							},
							{
								"x": 1057,
								"y": 530
							}
						]
					}
				},
				{
					"description": "sit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1093,
								"y": 509
							},
							{
								"x": 1108,
								"y": 509
							},
							{
								"x": 1108,
								"y": 530
							},
							{
								"x": 1093,
								"y": 530
							}
						]
					}
				},
				{
					"description": "consectetur",
					"boundingPoly": {
						"vertices": [
							{
								"x": 973,
								"y": 534
							},
							{
								"x": 1046,
								"y": 534
							},
							{
								"x": 1046,
								"y": 555
							},
							{
								"x": 973,
								"y": 555
							}
						]
					}
				},
				{
					"description": "adipiscing",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1049,
								"y": 534
							},
							{
								"x": 1112,
								"y": 534
							},
							{
								"x": 1112,
								"y": 555
							},
							{
								"x": 1049,
								"y": 555
							}
						]
					}
				},
				{
					"description": "elit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1117,
								"y": 534
							},
							{
								"x": 1137,
								"y": 534
							},
							{
								"x": 1137,
								"y": 555
							},
							{
								"x": 1117,
								"y": 555
							}
						]
					}
				},
				{
					"description": "Vestibulum",
					"boundingPoly": {
						"vertices": [
							{
								"x": 970,
								"y": 559
							},
							{
								"x": 1035,
								"y": 559
							},
							{
								"x": 1035,
								"y": 579
							},
							{
								"x": 970,
								"y": 579
							}
						]
					}
				},
				{
					"description": "et",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1047,
								"y": 559
							},
							{
								"x": 1057,
								"y": 559
							},
							{
								"x": 1057,
								"y": 579
							},
							{
								"x": 1047,
								"y": 579
							}
						]
					}
				},
				{
					"description": "placerat",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1064,
								"y": 559
							},
							{
								"x": 1112,
								"y": 559
							},
							{
								"x": 1112,
								"y": 579
							},
							{
								"x": 1064,
								"y": 579
							}
						]
					}
				},
				{
					"description": "elit",
					"boundingPoly": {
						"vertices": [
							{
								"x": 1118,
								"y": 559
							},
							{
								"x": 1137,
								"y": 559
							},
							{
								"x": 1137,
								"y": 579
							},
							{
								"x": 1118,
								"y": 579
							}
						]
					}
				},
				{
					"description": "Etiam",
					"boundingPoly": {
						"vertices": [
							{
								"x": 524,
								"y": 571
							},
							{
								"x": 575,
								"y": 571
							},
							{
								"x": 575,
								"y": 598
							},
							{
								"x": 524,
								"y": 598
							}
						]
					}
				},
				{
					"description": ".",
					"boundingPoly": {
						"vertices": [
							{
								"x": 585,
								"y": 571
							},
							{
								"x": 592,
								"y": 571
							},
							{
								"x": 592,
								"y": 598
							},
							{
								"x": 585,
								"y": 598
							}
						]
					}
				},
				{
					"description": ".",
					"boundingPoly": {
						"vertices": [
							{
								"x": 591,
								"y": 571
							},
							{
								"x": 598,
								"y": 571
							},
							{
								"x": 598,
								"y": 598
							},
							{
								"x": 591,
								"y": 598
							}
						]
					}
				},
				{
					"description": ".",
					"boundingPoly": {
						"vertices": [
							{
								"x": 597,
								"y": 571
							},
							{
								"x": 604,
								"y": 571
							},
							{
								"x": 604,
								"y": 598
							},
							{
								"x": 597,
								"y": 598
							}
						]
					}
				},
				{
					"description": ".",
					"boundingPoly": {
						"vertices": [
							{
								"x": 603,
								"y": 571
							},
							{
								"x": 610,
								"y": 571
							},
							{
								"x": 610,
								"y": 598
							},
							{
								"x": 603,
								"y": 598
							}
						]
					}
				},
				{
					"description": ".",
					"boundingPoly": {
						"vertices": [
							{
								"x": 608,
								"y": 571
							},
							{
								"x": 615,
								"y": 571
							},
							{
								"x": 615,
								"y": 598
							},
							{
								"x": 608,
								"y": 598
							}
						]
					}
				},
				{
					"description": ".",
					"boundingPoly": {
						"vertices": [
							{
								"x": 614,
								"y": 571
							},
							{
								"x": 621,
								"y": 571
							},
							{
								"x": 621,
								"y": 598
							},
							{
								"x": 614,
								"y": 598
							}
						]
					}
				},
				{
					"description": ".",
					"boundingPoly": {
						"vertices": [
							{
								"x": 619,
								"y": 571
							},
							{
								"x": 626,
								"y": 571
							},
							{
								"x": 626,
								"y": 598
							},
							{
								"x": 619,
								"y": 598
							}
						]
					}
				},
				{
					"description": "20",
					"boundingPoly": {
						"vertices": [
							{
								"x": 630,
								"y": 571
							},
							{
								"x": 650,
								"y": 571
							},
							{
								"x": 650,
								"y": 598
							},
							{
								"x": 630,
								"y": 598
							}
						]
					}
				},
				{
					"description": "$",
					"boundingPoly": {
						"vertices": [
							{
								"x": 656,
								"y": 571
							},
							{
								"x": 663,
								"y": 571
							},
							{
								"x": 663,
								"y": 598
							},
							{
								"x": 656,
								"y": 598
							}
						]
					}
				},
				{
					"description": "OOO",
					"boundingPoly": {
						"vertices": [
							{
								"x": 267,
								"y": 687
							},
							{
								"x": 457,
								"y": 680
							},
							{
								"x": 459,
								"y": 738
							},
							{
								"x": 269,
								"y": 745
							}
						]
					}
				}
			],};
			let api3= {
				"textAnnotations": [
					{
						"locale": "en",
						"description": "JAPANESE RESTAURANT\nMELBOURNE CENTRAL Phone Order: 9602 5616\nLunch Menu\n1. Tofu Curry Don\n$6.80\nDeep Fried Bean Curd with Curry Don\n2. Sukiyaki Beef with Rice\n$7.80\nSliced Beef Cooked in Sake Sauce on Rice\n3. Beef Shogayaki Don\n$8.80\nPan Grilled Sliced Beef with Ginger Sauce on Rice\n4. Teriyaki Chicken Don\n$8.80\nPan Grilled Chicken with Teriyaki Sauce on Rice\n5. Gyo Don\n$8.80\nPan Grilled Sliced Beef with Teriyaki Sauce on Rice\n6. Beef Curry Don\nPan Grilled Sliced Beef with Curry on Rice\n$8.80\n7. Buta Shogayaki Don\n$8.80\nPan Grilled Sliced Pork with Ginger Sauce on Rice\n8. Chicken Curry Don\n$8.80\nPan Grilled Chicken with Curry on Rice\n9. Buta Curry Don\n$8.80\nPan Grilled Sliced Pork with Curry on Rice\n10. Chicken Katsu Curry Don $8.80\nDeep Fried Crumbed Chicken Fillet with Curry on Rice\n11.Pork Katsu Curry Don\n$8.80\nDeep Fried Crumbed Pork Fillet with Curry on Rice\n12. Japanese Fried Rice\n$8.80\nJapanese Mixed Fried Rice with Diced Chicken and vegetable\nPhone Order: 9602 5616\nLevel 1.315 Elizabeth St Melbourne\n",
						"boundingPoly": {
							"vertices": [
								{
									"x": 42,
									"y": 111
								},
								{
									"x": 1440,
									"y": 111
								},
								{
									"x": 1440,
									"y": 2032
								},
								{
									"x": 42,
									"y": 2032
								}
							]
						}
					},
					{
						"description": "JAPANESE",
						"boundingPoly": {
							"vertices": [
								{
									"x": 765,
									"y": 111
								},
								{
									"x": 1035,
									"y": 111
								},
								{
									"x": 1035,
									"y": 159
								},
								{
									"x": 765,
									"y": 159
								}
							]
						}
					},
					{
						"description": "RESTAURANT",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1050,
									"y": 111
								},
								{
									"x": 1418,
									"y": 111
								},
								{
									"x": 1418,
									"y": 159
								},
								{
									"x": 1050,
									"y": 159
								}
							]
						}
					},
					{
						"description": "MELBOURNE",
						"boundingPoly": {
							"vertices": [
								{
									"x": 756,
									"y": 163
								},
								{
									"x": 933,
									"y": 164
								},
								{
									"x": 933,
									"y": 193
								},
								{
									"x": 756,
									"y": 192
								}
							]
						}
					},
					{
						"description": "CENTRAL",
						"boundingPoly": {
							"vertices": [
								{
									"x": 942,
									"y": 164
								},
								{
									"x": 1067,
									"y": 165
								},
								{
									"x": 1067,
									"y": 195
								},
								{
									"x": 942,
									"y": 194
								}
							]
						}
					},
					{
						"description": "Phone",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1108,
									"y": 165
								},
								{
									"x": 1187,
									"y": 165
								},
								{
									"x": 1187,
									"y": 195
								},
								{
									"x": 1108,
									"y": 195
								}
							]
						}
					},
					{
						"description": "Order",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1194,
									"y": 166
								},
								{
									"x": 1270,
									"y": 166
								},
								{
									"x": 1270,
									"y": 195
								},
								{
									"x": 1194,
									"y": 195
								}
							]
						}
					},
					{
						"description": ":",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1269,
									"y": 166
								},
								{
									"x": 1277,
									"y": 166
								},
								{
									"x": 1277,
									"y": 195
								},
								{
									"x": 1269,
									"y": 195
								}
							]
						}
					},
					{
						"description": "9602",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1287,
									"y": 166
								},
								{
									"x": 1346,
									"y": 166
								},
								{
									"x": 1346,
									"y": 196
								},
								{
									"x": 1287,
									"y": 196
								}
							]
						}
					},
					{
						"description": "5616",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1356,
									"y": 167
								},
								{
									"x": 1409,
									"y": 167
								},
								{
									"x": 1409,
									"y": 196
								},
								{
									"x": 1356,
									"y": 196
								}
							]
						}
					},
					{
						"description": "Lunch",
						"boundingPoly": {
							"vertices": [
								{
									"x": 526,
									"y": 312
								},
								{
									"x": 755,
									"y": 312
								},
								{
									"x": 755,
									"y": 399
								},
								{
									"x": 526,
									"y": 399
								}
							]
						}
					},
					{
						"description": "Menu",
						"boundingPoly": {
							"vertices": [
								{
									"x": 779,
									"y": 312
								},
								{
									"x": 1009,
									"y": 312
								},
								{
									"x": 1009,
									"y": 399
								},
								{
									"x": 779,
									"y": 399
								}
							]
						}
					},
					{
						"description": "1",
						"boundingPoly": {
							"vertices": [
								{
									"x": 51,
									"y": 443
								},
								{
									"x": 65,
									"y": 443
								},
								{
									"x": 65,
									"y": 492
								},
								{
									"x": 51,
									"y": 492
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 66,
									"y": 443
								},
								{
									"x": 80,
									"y": 443
								},
								{
									"x": 80,
									"y": 492
								},
								{
									"x": 66,
									"y": 492
								}
							]
						}
					},
					{
						"description": "Tofu",
						"boundingPoly": {
							"vertices": [
								{
									"x": 85,
									"y": 443
								},
								{
									"x": 164,
									"y": 443
								},
								{
									"x": 164,
									"y": 492
								},
								{
									"x": 85,
									"y": 492
								}
							]
						}
					},
					{
						"description": "Curry",
						"boundingPoly": {
							"vertices": [
								{
									"x": 186,
									"y": 443
								},
								{
									"x": 301,
									"y": 443
								},
								{
									"x": 301,
									"y": 492
								},
								{
									"x": 186,
									"y": 492
								}
							]
						}
					},
					{
						"description": "Don",
						"boundingPoly": {
							"vertices": [
								{
									"x": 314,
									"y": 443
								},
								{
									"x": 398,
									"y": 443
								},
								{
									"x": 398,
									"y": 492
								},
								{
									"x": 314,
									"y": 492
								}
							]
						}
					},
					{
						"description": "$",
						"boundingPoly": {
							"vertices": [
								{
									"x": 843,
									"y": 433
								},
								{
									"x": 861,
									"y": 433
								},
								{
									"x": 861,
									"y": 498
								},
								{
									"x": 843,
									"y": 498
								}
							]
						}
					},
					{
						"description": "6",
						"boundingPoly": {
							"vertices": [
								{
									"x": 869,
									"y": 433
								},
								{
									"x": 887,
									"y": 433
								},
								{
									"x": 887,
									"y": 498
								},
								{
									"x": 869,
									"y": 498
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 896,
									"y": 433
								},
								{
									"x": 914,
									"y": 433
								},
								{
									"x": 914,
									"y": 498
								},
								{
									"x": 896,
									"y": 498
								}
							]
						}
					},
					{
						"description": "80",
						"boundingPoly": {
							"vertices": [
								{
									"x": 911,
									"y": 433
								},
								{
									"x": 971,
									"y": 433
								},
								{
									"x": 971,
									"y": 498
								},
								{
									"x": 911,
									"y": 498
								}
							]
						}
					},
					{
						"description": "Deep",
						"boundingPoly": {
							"vertices": [
								{
									"x": 107,
									"y": 497
								},
								{
									"x": 180,
									"y": 497
								},
								{
									"x": 180,
									"y": 543
								},
								{
									"x": 107,
									"y": 543
								}
							]
						}
					},
					{
						"description": "Fried",
						"boundingPoly": {
							"vertices": [
								{
									"x": 189,
									"y": 497
								},
								{
									"x": 258,
									"y": 497
								},
								{
									"x": 258,
									"y": 543
								},
								{
									"x": 189,
									"y": 543
								}
							]
						}
					},
					{
						"description": "Bean",
						"boundingPoly": {
							"vertices": [
								{
									"x": 273,
									"y": 497
								},
								{
									"x": 340,
									"y": 497
								},
								{
									"x": 340,
									"y": 543
								},
								{
									"x": 273,
									"y": 543
								}
							]
						}
					},
					{
						"description": "Curd",
						"boundingPoly": {
							"vertices": [
								{
									"x": 353,
									"y": 497
								},
								{
									"x": 419,
									"y": 497
								},
								{
									"x": 419,
									"y": 543
								},
								{
									"x": 353,
									"y": 543
								}
							]
						}
					},
					{
						"description": "with",
						"boundingPoly": {
							"vertices": [
								{
									"x": 426,
									"y": 497
								},
								{
									"x": 488,
									"y": 497
								},
								{
									"x": 488,
									"y": 543
								},
								{
									"x": 426,
									"y": 543
								}
							]
						}
					},
					{
						"description": "Curry",
						"boundingPoly": {
							"vertices": [
								{
									"x": 504,
									"y": 497
								},
								{
									"x": 578,
									"y": 497
								},
								{
									"x": 578,
									"y": 543
								},
								{
									"x": 504,
									"y": 543
								}
							]
						}
					},
					{
						"description": "Don",
						"boundingPoly": {
							"vertices": [
								{
									"x": 586,
									"y": 497
								},
								{
									"x": 645,
									"y": 497
								},
								{
									"x": 645,
									"y": 543
								},
								{
									"x": 586,
									"y": 543
								}
							]
						}
					},
					{
						"description": "2",
						"boundingPoly": {
							"vertices": [
								{
									"x": 46,
									"y": 555
								},
								{
									"x": 59,
									"y": 555
								},
								{
									"x": 59,
									"y": 601
								},
								{
									"x": 46,
									"y": 601
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 69,
									"y": 555
								},
								{
									"x": 82,
									"y": 555
								},
								{
									"x": 82,
									"y": 601
								},
								{
									"x": 69,
									"y": 601
								}
							]
						}
					},
					{
						"description": "Sukiyaki",
						"boundingPoly": {
							"vertices": [
								{
									"x": 105,
									"y": 555
								},
								{
									"x": 294,
									"y": 555
								},
								{
									"x": 294,
									"y": 601
								},
								{
									"x": 105,
									"y": 601
								}
							]
						}
					},
					{
						"description": "Beef",
						"boundingPoly": {
							"vertices": [
								{
									"x": 299,
									"y": 555
								},
								{
									"x": 395,
									"y": 555
								},
								{
									"x": 395,
									"y": 601
								},
								{
									"x": 299,
									"y": 601
								}
							]
						}
					},
					{
						"description": "with",
						"boundingPoly": {
							"vertices": [
								{
									"x": 400,
									"y": 555
								},
								{
									"x": 492,
									"y": 555
								},
								{
									"x": 492,
									"y": 601
								},
								{
									"x": 400,
									"y": 601
								}
							]
						}
					},
					{
						"description": "Rice",
						"boundingPoly": {
							"vertices": [
								{
									"x": 512,
									"y": 555
								},
								{
									"x": 595,
									"y": 555
								},
								{
									"x": 595,
									"y": 601
								},
								{
									"x": 512,
									"y": 601
								}
							]
						}
					},
					{
						"description": "$",
						"boundingPoly": {
							"vertices": [
								{
									"x": 843,
									"y": 542
								},
								{
									"x": 861,
									"y": 542
								},
								{
									"x": 861,
									"y": 605
								},
								{
									"x": 843,
									"y": 605
								}
							]
						}
					},
					{
						"description": "7",
						"boundingPoly": {
							"vertices": [
								{
									"x": 869,
									"y": 542
								},
								{
									"x": 887,
									"y": 542
								},
								{
									"x": 887,
									"y": 605
								},
								{
									"x": 869,
									"y": 605
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 901,
									"y": 542
								},
								{
									"x": 919,
									"y": 542
								},
								{
									"x": 919,
									"y": 605
								},
								{
									"x": 901,
									"y": 605
								}
							]
						}
					},
					{
						"description": "80",
						"boundingPoly": {
							"vertices": [
								{
									"x": 918,
									"y": 542
								},
								{
									"x": 964,
									"y": 542
								},
								{
									"x": 964,
									"y": 605
								},
								{
									"x": 918,
									"y": 605
								}
							]
						}
					},
					{
						"description": "Sliced",
						"boundingPoly": {
							"vertices": [
								{
									"x": 103,
									"y": 607
								},
								{
									"x": 180,
									"y": 607
								},
								{
									"x": 180,
									"y": 653
								},
								{
									"x": 103,
									"y": 653
								}
							]
						}
					},
					{
						"description": "Beef",
						"boundingPoly": {
							"vertices": [
								{
									"x": 195,
									"y": 607
								},
								{
									"x": 262,
									"y": 607
								},
								{
									"x": 262,
									"y": 653
								},
								{
									"x": 195,
									"y": 653
								}
							]
						}
					},
					{
						"description": "Cooked",
						"boundingPoly": {
							"vertices": [
								{
									"x": 265,
									"y": 607
								},
								{
									"x": 370,
									"y": 607
								},
								{
									"x": 370,
									"y": 653
								},
								{
									"x": 265,
									"y": 653
								}
							]
						}
					},
					{
						"description": "in",
						"boundingPoly": {
							"vertices": [
								{
									"x": 382,
									"y": 607
								},
								{
									"x": 399,
									"y": 607
								},
								{
									"x": 399,
									"y": 653
								},
								{
									"x": 382,
									"y": 653
								}
							]
						}
					},
					{
						"description": "Sake",
						"boundingPoly": {
							"vertices": [
								{
									"x": 416,
									"y": 607
								},
								{
									"x": 482,
									"y": 607
								},
								{
									"x": 482,
									"y": 653
								},
								{
									"x": 416,
									"y": 653
								}
							]
						}
					},
					{
						"description": "Sauce",
						"boundingPoly": {
							"vertices": [
								{
									"x": 491,
									"y": 607
								},
								{
									"x": 574,
									"y": 607
								},
								{
									"x": 574,
									"y": 653
								},
								{
									"x": 491,
									"y": 653
								}
							]
						}
					},
					{
						"description": "on",
						"boundingPoly": {
							"vertices": [
								{
									"x": 585,
									"y": 607
								},
								{
									"x": 618,
									"y": 607
								},
								{
									"x": 618,
									"y": 653
								},
								{
									"x": 585,
									"y": 653
								}
							]
						}
					},
					{
						"description": "Rice",
						"boundingPoly": {
							"vertices": [
								{
									"x": 632,
									"y": 607
								},
								{
									"x": 687,
									"y": 607
								},
								{
									"x": 687,
									"y": 653
								},
								{
									"x": 632,
									"y": 653
								}
							]
						}
					},
					{
						"description": "3",
						"boundingPoly": {
							"vertices": [
								{
									"x": 45,
									"y": 667
								},
								{
									"x": 57,
									"y": 667
								},
								{
									"x": 57,
									"y": 712
								},
								{
									"x": 45,
									"y": 712
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 68,
									"y": 667
								},
								{
									"x": 80,
									"y": 667
								},
								{
									"x": 80,
									"y": 712
								},
								{
									"x": 68,
									"y": 712
								}
							]
						}
					},
					{
						"description": "Beef",
						"boundingPoly": {
							"vertices": [
								{
									"x": 99,
									"y": 667
								},
								{
									"x": 198,
									"y": 667
								},
								{
									"x": 198,
									"y": 712
								},
								{
									"x": 99,
									"y": 712
								}
							]
						}
					},
					{
						"description": "Shogayaki",
						"boundingPoly": {
							"vertices": [
								{
									"x": 206,
									"y": 667
								},
								{
									"x": 444,
									"y": 667
								},
								{
									"x": 444,
									"y": 712
								},
								{
									"x": 206,
									"y": 712
								}
							]
						}
					},
					{
						"description": "Don",
						"boundingPoly": {
							"vertices": [
								{
									"x": 448,
									"y": 667
								},
								{
									"x": 525,
									"y": 667
								},
								{
									"x": 525,
									"y": 712
								},
								{
									"x": 448,
									"y": 712
								}
							]
						}
					},
					{
						"description": "$",
						"boundingPoly": {
							"vertices": [
								{
									"x": 852,
									"y": 662
								},
								{
									"x": 867,
									"y": 662
								},
								{
									"x": 867,
									"y": 716
								},
								{
									"x": 852,
									"y": 716
								}
							]
						}
					},
					{
						"description": "8",
						"boundingPoly": {
							"vertices": [
								{
									"x": 879,
									"y": 662
								},
								{
									"x": 894,
									"y": 662
								},
								{
									"x": 894,
									"y": 716
								},
								{
									"x": 879,
									"y": 716
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 907,
									"y": 662
								},
								{
									"x": 922,
									"y": 662
								},
								{
									"x": 922,
									"y": 716
								},
								{
									"x": 907,
									"y": 716
								}
							]
						}
					},
					{
						"description": "80",
						"boundingPoly": {
							"vertices": [
								{
									"x": 918,
									"y": 662
								},
								{
									"x": 977,
									"y": 662
								},
								{
									"x": 977,
									"y": 716
								},
								{
									"x": 918,
									"y": 716
								}
							]
						}
					},
					{
						"description": "Pan",
						"boundingPoly": {
							"vertices": [
								{
									"x": 96,
									"y": 719
								},
								{
									"x": 141,
									"y": 719
								},
								{
									"x": 141,
									"y": 765
								},
								{
									"x": 96,
									"y": 765
								}
							]
						}
					},
					{
						"description": "Grilled",
						"boundingPoly": {
							"vertices": [
								{
									"x": 155,
									"y": 719
								},
								{
									"x": 252,
									"y": 719
								},
								{
									"x": 252,
									"y": 765
								},
								{
									"x": 155,
									"y": 765
								}
							]
						}
					},
					{
						"description": "Sliced",
						"boundingPoly": {
							"vertices": [
								{
									"x": 262,
									"y": 719
								},
								{
									"x": 339,
									"y": 719
								},
								{
									"x": 339,
									"y": 765
								},
								{
									"x": 262,
									"y": 765
								}
							]
						}
					},
					{
						"description": "Beef",
						"boundingPoly": {
							"vertices": [
								{
									"x": 354,
									"y": 719
								},
								{
									"x": 420,
									"y": 719
								},
								{
									"x": 420,
									"y": 765
								},
								{
									"x": 354,
									"y": 765
								}
							]
						}
					},
					{
						"description": "with",
						"boundingPoly": {
							"vertices": [
								{
									"x": 418,
									"y": 719
								},
								{
									"x": 478,
									"y": 719
								},
								{
									"x": 478,
									"y": 765
								},
								{
									"x": 418,
									"y": 765
								}
							]
						}
					},
					{
						"description": "Ginger",
						"boundingPoly": {
							"vertices": [
								{
									"x": 495,
									"y": 719
								},
								{
									"x": 593,
									"y": 719
								},
								{
									"x": 593,
									"y": 765
								},
								{
									"x": 495,
									"y": 765
								}
							]
						}
					},
					{
						"description": "Sauce",
						"boundingPoly": {
							"vertices": [
								{
									"x": 598,
									"y": 719
								},
								{
									"x": 683,
									"y": 719
								},
								{
									"x": 683,
									"y": 765
								},
								{
									"x": 598,
									"y": 765
								}
							]
						}
					},
					{
						"description": "on",
						"boundingPoly": {
							"vertices": [
								{
									"x": 692,
									"y": 719
								},
								{
									"x": 726,
									"y": 719
								},
								{
									"x": 726,
									"y": 765
								},
								{
									"x": 692,
									"y": 765
								}
							]
						}
					},
					{
						"description": "Rice",
						"boundingPoly": {
							"vertices": [
								{
									"x": 739,
									"y": 719
								},
								{
									"x": 795,
									"y": 719
								},
								{
									"x": 795,
									"y": 765
								},
								{
									"x": 739,
									"y": 765
								}
							]
						}
					},
					{
						"description": "4",
						"boundingPoly": {
							"vertices": [
								{
									"x": 42,
									"y": 772
								},
								{
									"x": 56,
									"y": 772
								},
								{
									"x": 56,
									"y": 823
								},
								{
									"x": 42,
									"y": 823
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 68,
									"y": 772
								},
								{
									"x": 82,
									"y": 772
								},
								{
									"x": 82,
									"y": 823
								},
								{
									"x": 68,
									"y": 823
								}
							]
						}
					},
					{
						"description": "Teriyaki",
						"boundingPoly": {
							"vertices": [
								{
									"x": 102,
									"y": 772
								},
								{
									"x": 277,
									"y": 772
								},
								{
									"x": 277,
									"y": 823
								},
								{
									"x": 102,
									"y": 823
								}
							]
						}
					},
					{
						"description": "Chicken",
						"boundingPoly": {
							"vertices": [
								{
									"x": 282,
									"y": 772
								},
								{
									"x": 442,
									"y": 772
								},
								{
									"x": 442,
									"y": 823
								},
								{
									"x": 282,
									"y": 823
								}
							]
						}
					},
					{
						"description": "Don",
						"boundingPoly": {
							"vertices": [
								{
									"x": 460,
									"y": 772
								},
								{
									"x": 548,
									"y": 772
								},
								{
									"x": 548,
									"y": 823
								},
								{
									"x": 460,
									"y": 823
								}
							]
						}
					},
					{
						"description": "$",
						"boundingPoly": {
							"vertices": [
								{
									"x": 850,
									"y": 770
								},
								{
									"x": 864,
									"y": 770
								},
								{
									"x": 864,
									"y": 820
								},
								{
									"x": 850,
									"y": 820
								}
							]
						}
					},
					{
						"description": "8",
						"boundingPoly": {
							"vertices": [
								{
									"x": 875,
									"y": 770
								},
								{
									"x": 889,
									"y": 770
								},
								{
									"x": 889,
									"y": 820
								},
								{
									"x": 875,
									"y": 820
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 906,
									"y": 770
								},
								{
									"x": 920,
									"y": 770
								},
								{
									"x": 920,
									"y": 820
								},
								{
									"x": 906,
									"y": 820
								}
							]
						}
					},
					{
						"description": "80",
						"boundingPoly": {
							"vertices": [
								{
									"x": 915,
									"y": 770
								},
								{
									"x": 971,
									"y": 770
								},
								{
									"x": 971,
									"y": 820
								},
								{
									"x": 915,
									"y": 820
								}
							]
						}
					},
					{
						"description": "Pan",
						"boundingPoly": {
							"vertices": [
								{
									"x": 104,
									"y": 828
								},
								{
									"x": 152,
									"y": 828
								},
								{
									"x": 152,
									"y": 870
								},
								{
									"x": 104,
									"y": 870
								}
							]
						}
					},
					{
						"description": "Grilled",
						"boundingPoly": {
							"vertices": [
								{
									"x": 162,
									"y": 828
								},
								{
									"x": 255,
									"y": 828
								},
								{
									"x": 255,
									"y": 870
								},
								{
									"x": 162,
									"y": 870
								}
							]
						}
					},
					{
						"description": "Chicken",
						"boundingPoly": {
							"vertices": [
								{
									"x": 272,
									"y": 828
								},
								{
									"x": 380,
									"y": 828
								},
								{
									"x": 380,
									"y": 870
								},
								{
									"x": 272,
									"y": 870
								}
							]
						}
					},
					{
						"description": "with",
						"boundingPoly": {
							"vertices": [
								{
									"x": 390,
									"y": 828
								},
								{
									"x": 444,
									"y": 828
								},
								{
									"x": 444,
									"y": 870
								},
								{
									"x": 390,
									"y": 870
								}
							]
						}
					},
					{
						"description": "Teriyaki",
						"boundingPoly": {
							"vertices": [
								{
									"x": 466,
									"y": 828
								},
								{
									"x": 575,
									"y": 828
								},
								{
									"x": 575,
									"y": 870
								},
								{
									"x": 466,
									"y": 870
								}
							]
						}
					},
					{
						"description": "Sauce",
						"boundingPoly": {
							"vertices": [
								{
									"x": 586,
									"y": 828
								},
								{
									"x": 666,
									"y": 828
								},
								{
									"x": 666,
									"y": 870
								},
								{
									"x": 586,
									"y": 870
								}
							]
						}
					},
					{
						"description": "on",
						"boundingPoly": {
							"vertices": [
								{
									"x": 680,
									"y": 828
								},
								{
									"x": 711,
									"y": 828
								},
								{
									"x": 711,
									"y": 870
								},
								{
									"x": 680,
									"y": 870
								}
							]
						}
					},
					{
						"description": "Rice",
						"boundingPoly": {
							"vertices": [
								{
									"x": 723,
									"y": 828
								},
								{
									"x": 777,
									"y": 828
								},
								{
									"x": 777,
									"y": 870
								},
								{
									"x": 723,
									"y": 870
								}
							]
						}
					},
					{
						"description": "5",
						"boundingPoly": {
							"vertices": [
								{
									"x": 43,
									"y": 887
								},
								{
									"x": 55,
									"y": 887
								},
								{
									"x": 55,
									"y": 932
								},
								{
									"x": 43,
									"y": 932
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 66,
									"y": 887
								},
								{
									"x": 78,
									"y": 887
								},
								{
									"x": 78,
									"y": 932
								},
								{
									"x": 66,
									"y": 932
								}
							]
						}
					},
					{
						"description": "Gyo",
						"boundingPoly": {
							"vertices": [
								{
									"x": 94,
									"y": 887
								},
								{
									"x": 178,
									"y": 887
								},
								{
									"x": 178,
									"y": 932
								},
								{
									"x": 94,
									"y": 932
								}
							]
						}
					},
					{
						"description": "Don",
						"boundingPoly": {
							"vertices": [
								{
									"x": 197,
									"y": 887
								},
								{
									"x": 274,
									"y": 887
								},
								{
									"x": 274,
									"y": 932
								},
								{
									"x": 197,
									"y": 932
								}
							]
						}
					},
					{
						"description": "$",
						"boundingPoly": {
							"vertices": [
								{
									"x": 842,
									"y": 878
								},
								{
									"x": 857,
									"y": 878
								},
								{
									"x": 857,
									"y": 932
								},
								{
									"x": 842,
									"y": 932
								}
							]
						}
					},
					{
						"description": "8",
						"boundingPoly": {
							"vertices": [
								{
									"x": 870,
									"y": 878
								},
								{
									"x": 885,
									"y": 878
								},
								{
									"x": 885,
									"y": 932
								},
								{
									"x": 870,
									"y": 932
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 892,
									"y": 878
								},
								{
									"x": 907,
									"y": 878
								},
								{
									"x": 907,
									"y": 932
								},
								{
									"x": 892,
									"y": 932
								}
							]
						}
					},
					{
						"description": "80",
						"boundingPoly": {
							"vertices": [
								{
									"x": 910,
									"y": 878
								},
								{
									"x": 960,
									"y": 878
								},
								{
									"x": 960,
									"y": 932
								},
								{
									"x": 910,
									"y": 932
								}
							]
						}
					},
					{
						"description": "Pan",
						"boundingPoly": {
							"vertices": [
								{
									"x": 99,
									"y": 938
								},
								{
									"x": 153,
									"y": 938
								},
								{
									"x": 153,
									"y": 980
								},
								{
									"x": 99,
									"y": 980
								}
							]
						}
					},
					{
						"description": "Grilled",
						"boundingPoly": {
							"vertices": [
								{
									"x": 163,
									"y": 938
								},
								{
									"x": 256,
									"y": 938
								},
								{
									"x": 256,
									"y": 980
								},
								{
									"x": 163,
									"y": 980
								}
							]
						}
					},
					{
						"description": "Sliced",
						"boundingPoly": {
							"vertices": [
								{
									"x": 271,
									"y": 938
								},
								{
									"x": 346,
									"y": 938
								},
								{
									"x": 346,
									"y": 980
								},
								{
									"x": 271,
									"y": 980
								}
							]
						}
					},
					{
						"description": "Beef",
						"boundingPoly": {
							"vertices": [
								{
									"x": 357,
									"y": 938
								},
								{
									"x": 422,
									"y": 938
								},
								{
									"x": 422,
									"y": 980
								},
								{
									"x": 357,
									"y": 980
								}
							]
						}
					},
					{
						"description": "with",
						"boundingPoly": {
							"vertices": [
								{
									"x": 424,
									"y": 938
								},
								{
									"x": 486,
									"y": 938
								},
								{
									"x": 486,
									"y": 980
								},
								{
									"x": 424,
									"y": 980
								}
							]
						}
					},
					{
						"description": "Teriyaki",
						"boundingPoly": {
							"vertices": [
								{
									"x": 506,
									"y": 938
								},
								{
									"x": 617,
									"y": 938
								},
								{
									"x": 617,
									"y": 980
								},
								{
									"x": 506,
									"y": 980
								}
							]
						}
					},
					{
						"description": "Sauce",
						"boundingPoly": {
							"vertices": [
								{
									"x": 621,
									"y": 938
								},
								{
									"x": 708,
									"y": 938
								},
								{
									"x": 708,
									"y": 980
								},
								{
									"x": 621,
									"y": 980
								}
							]
						}
					},
					{
						"description": "on",
						"boundingPoly": {
							"vertices": [
								{
									"x": 716,
									"y": 938
								},
								{
									"x": 746,
									"y": 938
								},
								{
									"x": 746,
									"y": 980
								},
								{
									"x": 716,
									"y": 980
								}
							]
						}
					},
					{
						"description": "Rice",
						"boundingPoly": {
							"vertices": [
								{
									"x": 763,
									"y": 938
								},
								{
									"x": 817,
									"y": 938
								},
								{
									"x": 817,
									"y": 980
								},
								{
									"x": 763,
									"y": 980
								}
							]
						}
					},
					{
						"description": "6",
						"boundingPoly": {
							"vertices": [
								{
									"x": 43,
									"y": 993
								},
								{
									"x": 57,
									"y": 993
								},
								{
									"x": 57,
									"y": 1043
								},
								{
									"x": 43,
									"y": 1043
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 69,
									"y": 993
								},
								{
									"x": 83,
									"y": 993
								},
								{
									"x": 83,
									"y": 1043
								},
								{
									"x": 69,
									"y": 1043
								}
							]
						}
					},
					{
						"description": "Beef",
						"boundingPoly": {
							"vertices": [
								{
									"x": 100,
									"y": 993
								},
								{
									"x": 203,
									"y": 993
								},
								{
									"x": 203,
									"y": 1043
								},
								{
									"x": 100,
									"y": 1043
								}
							]
						}
					},
					{
						"description": "Curry",
						"boundingPoly": {
							"vertices": [
								{
									"x": 207,
									"y": 993
								},
								{
									"x": 324,
									"y": 993
								},
								{
									"x": 324,
									"y": 1043
								},
								{
									"x": 207,
									"y": 1043
								}
							]
						}
					},
					{
						"description": "Don",
						"boundingPoly": {
							"vertices": [
								{
									"x": 338,
									"y": 993
								},
								{
									"x": 425,
									"y": 993
								},
								{
									"x": 425,
									"y": 1043
								},
								{
									"x": 338,
									"y": 1043
								}
							]
						}
					},
					{
						"description": "Pan",
						"boundingPoly": {
							"vertices": [
								{
									"x": 102,
									"y": 1048
								},
								{
									"x": 153,
									"y": 1048
								},
								{
									"x": 153,
									"y": 1088
								},
								{
									"x": 102,
									"y": 1088
								}
							]
						}
					},
					{
						"description": "Grilled",
						"boundingPoly": {
							"vertices": [
								{
									"x": 162,
									"y": 1048
								},
								{
									"x": 255,
									"y": 1048
								},
								{
									"x": 255,
									"y": 1088
								},
								{
									"x": 162,
									"y": 1088
								}
							]
						}
					},
					{
						"description": "Sliced",
						"boundingPoly": {
							"vertices": [
								{
									"x": 273,
									"y": 1048
								},
								{
									"x": 350,
									"y": 1048
								},
								{
									"x": 350,
									"y": 1088
								},
								{
									"x": 273,
									"y": 1088
								}
							]
						}
					},
					{
						"description": "Beef",
						"boundingPoly": {
							"vertices": [
								{
									"x": 359,
									"y": 1048
								},
								{
									"x": 421,
									"y": 1048
								},
								{
									"x": 421,
									"y": 1088
								},
								{
									"x": 359,
									"y": 1088
								}
							]
						}
					},
					{
						"description": "with",
						"boundingPoly": {
							"vertices": [
								{
									"x": 428,
									"y": 1048
								},
								{
									"x": 487,
									"y": 1048
								},
								{
									"x": 487,
									"y": 1088
								},
								{
									"x": 428,
									"y": 1088
								}
							]
						}
					},
					{
						"description": "Curry",
						"boundingPoly": {
							"vertices": [
								{
									"x": 504,
									"y": 1048
								},
								{
									"x": 577,
									"y": 1048
								},
								{
									"x": 577,
									"y": 1088
								},
								{
									"x": 504,
									"y": 1088
								}
							]
						}
					},
					{
						"description": "on",
						"boundingPoly": {
							"vertices": [
								{
									"x": 590,
									"y": 1048
								},
								{
									"x": 620,
									"y": 1048
								},
								{
									"x": 620,
									"y": 1088
								},
								{
									"x": 590,
									"y": 1088
								}
							]
						}
					},
					{
						"description": "Rice",
						"boundingPoly": {
							"vertices": [
								{
									"x": 635,
									"y": 1048
								},
								{
									"x": 687,
									"y": 1048
								},
								{
									"x": 687,
									"y": 1088
								},
								{
									"x": 635,
									"y": 1088
								}
							]
						}
					},
					{
						"description": "$",
						"boundingPoly": {
							"vertices": [
								{
									"x": 847,
									"y": 989
								},
								{
									"x": 863,
									"y": 988
								},
								{
									"x": 866,
									"y": 1046
								},
								{
									"x": 850,
									"y": 1047
								}
							]
						}
					},
					{
						"description": "8",
						"boundingPoly": {
							"vertices": [
								{
									"x": 871,
									"y": 988
								},
								{
									"x": 887,
									"y": 987
								},
								{
									"x": 890,
									"y": 1045
								},
								{
									"x": 874,
									"y": 1046
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 895,
									"y": 987
								},
								{
									"x": 911,
									"y": 986
								},
								{
									"x": 914,
									"y": 1044
								},
								{
									"x": 898,
									"y": 1045
								}
							]
						}
					},
					{
						"description": "80",
						"boundingPoly": {
							"vertices": [
								{
									"x": 914,
									"y": 986
								},
								{
									"x": 968,
									"y": 983
								},
								{
									"x": 971,
									"y": 1042
								},
								{
									"x": 917,
									"y": 1045
								}
							]
						}
					},
					{
						"description": "7",
						"boundingPoly": {
							"vertices": [
								{
									"x": 514,
									"y": 1192
								},
								{
									"x": 528,
									"y": 1192
								},
								{
									"x": 528,
									"y": 1243
								},
								{
									"x": 514,
									"y": 1243
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 535,
									"y": 1192
								},
								{
									"x": 549,
									"y": 1192
								},
								{
									"x": 549,
									"y": 1243
								},
								{
									"x": 535,
									"y": 1243
								}
							]
						}
					},
					{
						"description": "Buta",
						"boundingPoly": {
							"vertices": [
								{
									"x": 572,
									"y": 1192
								},
								{
									"x": 664,
									"y": 1192
								},
								{
									"x": 664,
									"y": 1243
								},
								{
									"x": 572,
									"y": 1243
								}
							]
						}
					},
					{
						"description": "Shogayaki",
						"boundingPoly": {
							"vertices": [
								{
									"x": 682,
									"y": 1192
								},
								{
									"x": 916,
									"y": 1192
								},
								{
									"x": 916,
									"y": 1243
								},
								{
									"x": 682,
									"y": 1243
								}
							]
						}
					},
					{
						"description": "Don",
						"boundingPoly": {
							"vertices": [
								{
									"x": 919,
									"y": 1192
								},
								{
									"x": 1006,
									"y": 1192
								},
								{
									"x": 1006,
									"y": 1243
								},
								{
									"x": 919,
									"y": 1243
								}
							]
						}
					},
					{
						"description": "$",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1321,
									"y": 1190
								},
								{
									"x": 1336,
									"y": 1190
								},
								{
									"x": 1336,
									"y": 1244
								},
								{
									"x": 1321,
									"y": 1244
								}
							]
						}
					},
					{
						"description": "8",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1348,
									"y": 1190
								},
								{
									"x": 1363,
									"y": 1190
								},
								{
									"x": 1363,
									"y": 1244
								},
								{
									"x": 1348,
									"y": 1244
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1376,
									"y": 1190
								},
								{
									"x": 1391,
									"y": 1190
								},
								{
									"x": 1391,
									"y": 1244
								},
								{
									"x": 1376,
									"y": 1244
								}
							]
						}
					},
					{
						"description": "80",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1389,
									"y": 1190
								},
								{
									"x": 1439,
									"y": 1190
								},
								{
									"x": 1439,
									"y": 1244
								},
								{
									"x": 1389,
									"y": 1244
								}
							]
						}
					},
					{
						"description": "Pan",
						"boundingPoly": {
							"vertices": [
								{
									"x": 571,
									"y": 1249
								},
								{
									"x": 621,
									"y": 1249
								},
								{
									"x": 621,
									"y": 1293
								},
								{
									"x": 571,
									"y": 1293
								}
							]
						}
					},
					{
						"description": "Grilled",
						"boundingPoly": {
							"vertices": [
								{
									"x": 633,
									"y": 1249
								},
								{
									"x": 725,
									"y": 1249
								},
								{
									"x": 725,
									"y": 1293
								},
								{
									"x": 633,
									"y": 1293
								}
							]
						}
					},
					{
						"description": "Sliced",
						"boundingPoly": {
							"vertices": [
								{
									"x": 739,
									"y": 1249
								},
								{
									"x": 819,
									"y": 1249
								},
								{
									"x": 819,
									"y": 1293
								},
								{
									"x": 739,
									"y": 1293
								}
							]
						}
					},
					{
						"description": "Pork",
						"boundingPoly": {
							"vertices": [
								{
									"x": 828,
									"y": 1249
								},
								{
									"x": 889,
									"y": 1249
								},
								{
									"x": 889,
									"y": 1293
								},
								{
									"x": 828,
									"y": 1293
								}
							]
						}
					},
					{
						"description": "with",
						"boundingPoly": {
							"vertices": [
								{
									"x": 896,
									"y": 1249
								},
								{
									"x": 955,
									"y": 1249
								},
								{
									"x": 955,
									"y": 1293
								},
								{
									"x": 896,
									"y": 1293
								}
							]
						}
					},
					{
						"description": "Ginger",
						"boundingPoly": {
							"vertices": [
								{
									"x": 970,
									"y": 1249
								},
								{
									"x": 1069,
									"y": 1249
								},
								{
									"x": 1069,
									"y": 1293
								},
								{
									"x": 970,
									"y": 1293
								}
							]
						}
					},
					{
						"description": "Sauce",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1080,
									"y": 1249
								},
								{
									"x": 1164,
									"y": 1249
								},
								{
									"x": 1164,
									"y": 1293
								},
								{
									"x": 1080,
									"y": 1293
								}
							]
						}
					},
					{
						"description": "on",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1174,
									"y": 1249
								},
								{
									"x": 1206,
									"y": 1249
								},
								{
									"x": 1206,
									"y": 1293
								},
								{
									"x": 1174,
									"y": 1293
								}
							]
						}
					},
					{
						"description": "Rice",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1219,
									"y": 1249
								},
								{
									"x": 1276,
									"y": 1249
								},
								{
									"x": 1276,
									"y": 1293
								},
								{
									"x": 1219,
									"y": 1293
								}
							]
						}
					},
					{
						"description": "8",
						"boundingPoly": {
							"vertices": [
								{
									"x": 513,
									"y": 1304
								},
								{
									"x": 526,
									"y": 1304
								},
								{
									"x": 526,
									"y": 1351
								},
								{
									"x": 513,
									"y": 1351
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 537,
									"y": 1304
								},
								{
									"x": 550,
									"y": 1304
								},
								{
									"x": 550,
									"y": 1351
								},
								{
									"x": 537,
									"y": 1351
								}
							]
						}
					},
					{
						"description": "Chicken",
						"boundingPoly": {
							"vertices": [
								{
									"x": 572,
									"y": 1304
								},
								{
									"x": 729,
									"y": 1304
								},
								{
									"x": 729,
									"y": 1351
								},
								{
									"x": 572,
									"y": 1351
								}
							]
						}
					},
					{
						"description": "Curry",
						"boundingPoly": {
							"vertices": [
								{
									"x": 753,
									"y": 1304
								},
								{
									"x": 870,
									"y": 1304
								},
								{
									"x": 870,
									"y": 1351
								},
								{
									"x": 753,
									"y": 1351
								}
							]
						}
					},
					{
						"description": "Don",
						"boundingPoly": {
							"vertices": [
								{
									"x": 880,
									"y": 1304
								},
								{
									"x": 968,
									"y": 1304
								},
								{
									"x": 968,
									"y": 1351
								},
								{
									"x": 880,
									"y": 1351
								}
							]
						}
					},
					{
						"description": "$",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1307,
									"y": 1294
								},
								{
									"x": 1325,
									"y": 1294
								},
								{
									"x": 1325,
									"y": 1357
								},
								{
									"x": 1307,
									"y": 1357
								}
							]
						}
					},
					{
						"description": "8",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1339,
									"y": 1294
								},
								{
									"x": 1357,
									"y": 1294
								},
								{
									"x": 1357,
									"y": 1357
								},
								{
									"x": 1339,
									"y": 1357
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1365,
									"y": 1294
								},
								{
									"x": 1383,
									"y": 1294
								},
								{
									"x": 1383,
									"y": 1357
								},
								{
									"x": 1365,
									"y": 1357
								}
							]
						}
					},
					{
						"description": "80",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1380,
									"y": 1294
								},
								{
									"x": 1438,
									"y": 1294
								},
								{
									"x": 1438,
									"y": 1357
								},
								{
									"x": 1380,
									"y": 1357
								}
							]
						}
					},
					{
						"description": "Pan",
						"boundingPoly": {
							"vertices": [
								{
									"x": 572,
									"y": 1358
								},
								{
									"x": 620,
									"y": 1358
								},
								{
									"x": 620,
									"y": 1400
								},
								{
									"x": 572,
									"y": 1400
								}
							]
						}
					},
					{
						"description": "Grilled",
						"boundingPoly": {
							"vertices": [
								{
									"x": 631,
									"y": 1358
								},
								{
									"x": 723,
									"y": 1358
								},
								{
									"x": 723,
									"y": 1400
								},
								{
									"x": 631,
									"y": 1400
								}
							]
						}
					},
					{
						"description": "Chicken",
						"boundingPoly": {
							"vertices": [
								{
									"x": 740,
									"y": 1358
								},
								{
									"x": 848,
									"y": 1358
								},
								{
									"x": 848,
									"y": 1400
								},
								{
									"x": 740,
									"y": 1400
								}
							]
						}
					},
					{
						"description": "with",
						"boundingPoly": {
							"vertices": [
								{
									"x": 859,
									"y": 1358
								},
								{
									"x": 919,
									"y": 1358
								},
								{
									"x": 919,
									"y": 1400
								},
								{
									"x": 859,
									"y": 1400
								}
							]
						}
					},
					{
						"description": "Curry",
						"boundingPoly": {
							"vertices": [
								{
									"x": 934,
									"y": 1358
								},
								{
									"x": 1005,
									"y": 1358
								},
								{
									"x": 1005,
									"y": 1400
								},
								{
									"x": 934,
									"y": 1400
								}
							]
						}
					},
					{
						"description": "on",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1020,
									"y": 1358
								},
								{
									"x": 1050,
									"y": 1358
								},
								{
									"x": 1050,
									"y": 1400
								},
								{
									"x": 1020,
									"y": 1400
								}
							]
						}
					},
					{
						"description": "Rice",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1067,
									"y": 1358
								},
								{
									"x": 1123,
									"y": 1358
								},
								{
									"x": 1123,
									"y": 1400
								},
								{
									"x": 1067,
									"y": 1400
								}
							]
						}
					},
					{
						"description": "9",
						"boundingPoly": {
							"vertices": [
								{
									"x": 513,
									"y": 1415
								},
								{
									"x": 527,
									"y": 1415
								},
								{
									"x": 527,
									"y": 1464
								},
								{
									"x": 513,
									"y": 1464
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 538,
									"y": 1415
								},
								{
									"x": 552,
									"y": 1415
								},
								{
									"x": 552,
									"y": 1464
								},
								{
									"x": 538,
									"y": 1464
								}
							]
						}
					},
					{
						"description": "Buta",
						"boundingPoly": {
							"vertices": [
								{
									"x": 568,
									"y": 1415
								},
								{
									"x": 663,
									"y": 1415
								},
								{
									"x": 663,
									"y": 1464
								},
								{
									"x": 568,
									"y": 1464
								}
							]
						}
					},
					{
						"description": "Curry",
						"boundingPoly": {
							"vertices": [
								{
									"x": 685,
									"y": 1415
								},
								{
									"x": 793,
									"y": 1415
								},
								{
									"x": 793,
									"y": 1464
								},
								{
									"x": 685,
									"y": 1464
								}
							]
						}
					},
					{
						"description": "Don",
						"boundingPoly": {
							"vertices": [
								{
									"x": 813,
									"y": 1415
								},
								{
									"x": 897,
									"y": 1415
								},
								{
									"x": 897,
									"y": 1464
								},
								{
									"x": 813,
									"y": 1464
								}
							]
						}
					},
					{
						"description": "$",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1313,
									"y": 1402
								},
								{
									"x": 1331,
									"y": 1402
								},
								{
									"x": 1331,
									"y": 1465
								},
								{
									"x": 1313,
									"y": 1465
								}
							]
						}
					},
					{
						"description": "8",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1339,
									"y": 1402
								},
								{
									"x": 1357,
									"y": 1402
								},
								{
									"x": 1357,
									"y": 1465
								},
								{
									"x": 1339,
									"y": 1465
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1365,
									"y": 1402
								},
								{
									"x": 1383,
									"y": 1402
								},
								{
									"x": 1383,
									"y": 1465
								},
								{
									"x": 1365,
									"y": 1465
								}
							]
						}
					},
					{
						"description": "80",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1380,
									"y": 1402
								},
								{
									"x": 1438,
									"y": 1402
								},
								{
									"x": 1438,
									"y": 1465
								},
								{
									"x": 1380,
									"y": 1465
								}
							]
						}
					},
					{
						"description": "Pan",
						"boundingPoly": {
							"vertices": [
								{
									"x": 572,
									"y": 1465
								},
								{
									"x": 618,
									"y": 1465
								},
								{
									"x": 618,
									"y": 1505
								},
								{
									"x": 572,
									"y": 1505
								}
							]
						}
					},
					{
						"description": "Grilled",
						"boundingPoly": {
							"vertices": [
								{
									"x": 632,
									"y": 1465
								},
								{
									"x": 725,
									"y": 1466
								},
								{
									"x": 725,
									"y": 1507
								},
								{
									"x": 632,
									"y": 1506
								}
							]
						}
					},
					{
						"description": "Sliced",
						"boundingPoly": {
							"vertices": [
								{
									"x": 737,
									"y": 1466
								},
								{
									"x": 815,
									"y": 1467
								},
								{
									"x": 815,
									"y": 1508
								},
								{
									"x": 737,
									"y": 1507
								}
							]
						}
					},
					{
						"description": "Pork",
						"boundingPoly": {
							"vertices": [
								{
									"x": 831,
									"y": 1467
								},
								{
									"x": 887,
									"y": 1467
								},
								{
									"x": 887,
									"y": 1507
								},
								{
									"x": 831,
									"y": 1507
								}
							]
						}
					},
					{
						"description": "with",
						"boundingPoly": {
							"vertices": [
								{
									"x": 897,
									"y": 1467
								},
								{
									"x": 956,
									"y": 1467
								},
								{
									"x": 956,
									"y": 1508
								},
								{
									"x": 897,
									"y": 1508
								}
							]
						}
					},
					{
						"description": "Curry",
						"boundingPoly": {
							"vertices": [
								{
									"x": 972,
									"y": 1468
								},
								{
									"x": 1047,
									"y": 1468
								},
								{
									"x": 1047,
									"y": 1508
								},
								{
									"x": 972,
									"y": 1508
								}
							]
						}
					},
					{
						"description": "on",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1060,
									"y": 1468
								},
								{
									"x": 1090,
									"y": 1468
								},
								{
									"x": 1090,
									"y": 1508
								},
								{
									"x": 1060,
									"y": 1508
								}
							]
						}
					},
					{
						"description": "Rice",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1104,
									"y": 1469
								},
								{
									"x": 1164,
									"y": 1469
								},
								{
									"x": 1164,
									"y": 1509
								},
								{
									"x": 1104,
									"y": 1509
								}
							]
						}
					},
					{
						"description": "10",
						"boundingPoly": {
							"vertices": [
								{
									"x": 519,
									"y": 1522
								},
								{
									"x": 553,
									"y": 1522
								},
								{
									"x": 553,
									"y": 1569
								},
								{
									"x": 519,
									"y": 1569
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 563,
									"y": 1522
								},
								{
									"x": 576,
									"y": 1522
								},
								{
									"x": 576,
									"y": 1569
								},
								{
									"x": 563,
									"y": 1569
								}
							]
						}
					},
					{
						"description": "Chicken",
						"boundingPoly": {
							"vertices": [
								{
									"x": 599,
									"y": 1522
								},
								{
									"x": 762,
									"y": 1522
								},
								{
									"x": 762,
									"y": 1569
								},
								{
									"x": 599,
									"y": 1569
								}
							]
						}
					},
					{
						"description": "Katsu",
						"boundingPoly": {
							"vertices": [
								{
									"x": 779,
									"y": 1522
								},
								{
									"x": 896,
									"y": 1522
								},
								{
									"x": 896,
									"y": 1569
								},
								{
									"x": 779,
									"y": 1569
								}
							]
						}
					},
					{
						"description": "Curry",
						"boundingPoly": {
							"vertices": [
								{
									"x": 913,
									"y": 1522
								},
								{
									"x": 1024,
									"y": 1522
								},
								{
									"x": 1024,
									"y": 1569
								},
								{
									"x": 913,
									"y": 1569
								}
							]
						}
					},
					{
						"description": "Don",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1041,
									"y": 1522
								},
								{
									"x": 1122,
									"y": 1522
								},
								{
									"x": 1122,
									"y": 1569
								},
								{
									"x": 1041,
									"y": 1569
								}
							]
						}
					},
					{
						"description": "$",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1316,
									"y": 1510
								},
								{
									"x": 1334,
									"y": 1510
								},
								{
									"x": 1334,
									"y": 1573
								},
								{
									"x": 1316,
									"y": 1573
								}
							]
						}
					},
					{
						"description": "8",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1341,
									"y": 1510
								},
								{
									"x": 1359,
									"y": 1510
								},
								{
									"x": 1359,
									"y": 1573
								},
								{
									"x": 1341,
									"y": 1573
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1367,
									"y": 1510
								},
								{
									"x": 1385,
									"y": 1510
								},
								{
									"x": 1385,
									"y": 1573
								},
								{
									"x": 1367,
									"y": 1573
								}
							]
						}
					},
					{
						"description": "80",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1382,
									"y": 1510
								},
								{
									"x": 1440,
									"y": 1510
								},
								{
									"x": 1440,
									"y": 1573
								},
								{
									"x": 1382,
									"y": 1573
								}
							]
						}
					},
					{
						"description": "Deep",
						"boundingPoly": {
							"vertices": [
								{
									"x": 568,
									"y": 1575
								},
								{
									"x": 640,
									"y": 1575
								},
								{
									"x": 640,
									"y": 1621
								},
								{
									"x": 568,
									"y": 1621
								}
							]
						}
					},
					{
						"description": "Fried",
						"boundingPoly": {
							"vertices": [
								{
									"x": 657,
									"y": 1575
								},
								{
									"x": 720,
									"y": 1575
								},
								{
									"x": 720,
									"y": 1621
								},
								{
									"x": 657,
									"y": 1621
								}
							]
						}
					},
					{
						"description": "Crumbed",
						"boundingPoly": {
							"vertices": [
								{
									"x": 735,
									"y": 1575
								},
								{
									"x": 867,
									"y": 1575
								},
								{
									"x": 867,
									"y": 1621
								},
								{
									"x": 735,
									"y": 1621
								}
							]
						}
					},
					{
						"description": "Chicken",
						"boundingPoly": {
							"vertices": [
								{
									"x": 882,
									"y": 1575
								},
								{
									"x": 989,
									"y": 1575
								},
								{
									"x": 989,
									"y": 1621
								},
								{
									"x": 882,
									"y": 1621
								}
							]
						}
					},
					{
						"description": "Fillet",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1000,
									"y": 1575
								},
								{
									"x": 1072,
									"y": 1575
								},
								{
									"x": 1072,
									"y": 1621
								},
								{
									"x": 1000,
									"y": 1621
								}
							]
						}
					},
					{
						"description": "with",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1076,
									"y": 1575
								},
								{
									"x": 1132,
									"y": 1575
								},
								{
									"x": 1132,
									"y": 1621
								},
								{
									"x": 1076,
									"y": 1621
								}
							]
						}
					},
					{
						"description": "Curry",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1155,
									"y": 1575
								},
								{
									"x": 1227,
									"y": 1575
								},
								{
									"x": 1227,
									"y": 1621
								},
								{
									"x": 1155,
									"y": 1621
								}
							]
						}
					},
					{
						"description": "on",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1240,
									"y": 1575
								},
								{
									"x": 1265,
									"y": 1575
								},
								{
									"x": 1265,
									"y": 1621
								},
								{
									"x": 1240,
									"y": 1621
								}
							]
						}
					},
					{
						"description": "Rice",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1280,
									"y": 1575
								},
								{
									"x": 1334,
									"y": 1575
								},
								{
									"x": 1334,
									"y": 1621
								},
								{
									"x": 1280,
									"y": 1621
								}
							]
						}
					},
					{
						"description": "11",
						"boundingPoly": {
							"vertices": [
								{
									"x": 517,
									"y": 1631
								},
								{
									"x": 559,
									"y": 1631
								},
								{
									"x": 558,
									"y": 1678
								},
								{
									"x": 516,
									"y": 1678
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 562,
									"y": 1632
								},
								{
									"x": 575,
									"y": 1632
								},
								{
									"x": 574,
									"y": 1678
								},
								{
									"x": 561,
									"y": 1678
								}
							]
						}
					},
					{
						"description": "Pork",
						"boundingPoly": {
							"vertices": [
								{
									"x": 576,
									"y": 1632
								},
								{
									"x": 665,
									"y": 1633
								},
								{
									"x": 664,
									"y": 1679
								},
								{
									"x": 575,
									"y": 1678
								}
							]
						}
					},
					{
						"description": "Katsu",
						"boundingPoly": {
							"vertices": [
								{
									"x": 682,
									"y": 1633
								},
								{
									"x": 804,
									"y": 1634
								},
								{
									"x": 803,
									"y": 1681
								},
								{
									"x": 681,
									"y": 1680
								}
							]
						}
					},
					{
						"description": "Curry",
						"boundingPoly": {
							"vertices": [
								{
									"x": 821,
									"y": 1634
								},
								{
									"x": 933,
									"y": 1635
								},
								{
									"x": 932,
									"y": 1682
								},
								{
									"x": 820,
									"y": 1681
								}
							]
						}
					},
					{
						"description": "Don",
						"boundingPoly": {
							"vertices": [
								{
									"x": 950,
									"y": 1636
								},
								{
									"x": 1035,
									"y": 1637
								},
								{
									"x": 1034,
									"y": 1684
								},
								{
									"x": 949,
									"y": 1683
								}
							]
						}
					},
					{
						"description": "$",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1316,
									"y": 1622
								},
								{
									"x": 1334,
									"y": 1622
								},
								{
									"x": 1334,
									"y": 1685
								},
								{
									"x": 1316,
									"y": 1685
								}
							]
						}
					},
					{
						"description": "8",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1348,
									"y": 1622
								},
								{
									"x": 1366,
									"y": 1622
								},
								{
									"x": 1366,
									"y": 1685
								},
								{
									"x": 1348,
									"y": 1685
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1373,
									"y": 1622
								},
								{
									"x": 1391,
									"y": 1622
								},
								{
									"x": 1391,
									"y": 1685
								},
								{
									"x": 1373,
									"y": 1685
								}
							]
						}
					},
					{
						"description": "80",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1391,
									"y": 1622
								},
								{
									"x": 1437,
									"y": 1622
								},
								{
									"x": 1437,
									"y": 1685
								},
								{
									"x": 1391,
									"y": 1685
								}
							]
						}
					},
					{
						"description": "Deep",
						"boundingPoly": {
							"vertices": [
								{
									"x": 578,
									"y": 1687
								},
								{
									"x": 645,
									"y": 1687
								},
								{
									"x": 645,
									"y": 1731
								},
								{
									"x": 578,
									"y": 1731
								}
							]
						}
					},
					{
						"description": "Fried",
						"boundingPoly": {
							"vertices": [
								{
									"x": 662,
									"y": 1687
								},
								{
									"x": 728,
									"y": 1687
								},
								{
									"x": 728,
									"y": 1731
								},
								{
									"x": 662,
									"y": 1731
								}
							]
						}
					},
					{
						"description": "Crumbed",
						"boundingPoly": {
							"vertices": [
								{
									"x": 741,
									"y": 1687
								},
								{
									"x": 872,
									"y": 1687
								},
								{
									"x": 872,
									"y": 1731
								},
								{
									"x": 741,
									"y": 1731
								}
							]
						}
					},
					{
						"description": "Pork",
						"boundingPoly": {
							"vertices": [
								{
									"x": 885,
									"y": 1687
								},
								{
									"x": 942,
									"y": 1687
								},
								{
									"x": 942,
									"y": 1731
								},
								{
									"x": 885,
									"y": 1731
								}
							]
						}
					},
					{
						"description": "Fillet",
						"boundingPoly": {
							"vertices": [
								{
									"x": 959,
									"y": 1687
								},
								{
									"x": 1030,
									"y": 1687
								},
								{
									"x": 1030,
									"y": 1731
								},
								{
									"x": 959,
									"y": 1731
								}
							]
						}
					},
					{
						"description": "with",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1032,
									"y": 1687
								},
								{
									"x": 1091,
									"y": 1687
								},
								{
									"x": 1091,
									"y": 1731
								},
								{
									"x": 1032,
									"y": 1731
								}
							]
						}
					},
					{
						"description": "Curry",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1106,
									"y": 1687
								},
								{
									"x": 1181,
									"y": 1687
								},
								{
									"x": 1181,
									"y": 1731
								},
								{
									"x": 1106,
									"y": 1731
								}
							]
						}
					},
					{
						"description": "on",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1191,
									"y": 1687
								},
								{
									"x": 1223,
									"y": 1687
								},
								{
									"x": 1223,
									"y": 1731
								},
								{
									"x": 1191,
									"y": 1731
								}
							]
						}
					},
					{
						"description": "Rice",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1236,
									"y": 1687
								},
								{
									"x": 1293,
									"y": 1687
								},
								{
									"x": 1293,
									"y": 1731
								},
								{
									"x": 1236,
									"y": 1731
								}
							]
						}
					},
					{
						"description": "12",
						"boundingPoly": {
							"vertices": [
								{
									"x": 520,
									"y": 1744
								},
								{
									"x": 557,
									"y": 1744
								},
								{
									"x": 557,
									"y": 1795
								},
								{
									"x": 520,
									"y": 1795
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 563,
									"y": 1744
								},
								{
									"x": 577,
									"y": 1744
								},
								{
									"x": 577,
									"y": 1795
								},
								{
									"x": 563,
									"y": 1795
								}
							]
						}
					},
					{
						"description": "Japanese",
						"boundingPoly": {
							"vertices": [
								{
									"x": 587,
									"y": 1744
								},
								{
									"x": 781,
									"y": 1744
								},
								{
									"x": 781,
									"y": 1795
								},
								{
									"x": 587,
									"y": 1795
								}
							]
						}
					},
					{
						"description": "Fried",
						"boundingPoly": {
							"vertices": [
								{
									"x": 798,
									"y": 1744
								},
								{
									"x": 903,
									"y": 1744
								},
								{
									"x": 903,
									"y": 1795
								},
								{
									"x": 798,
									"y": 1795
								}
							]
						}
					},
					{
						"description": "Rice",
						"boundingPoly": {
							"vertices": [
								{
									"x": 916,
									"y": 1744
								},
								{
									"x": 1005,
									"y": 1744
								},
								{
									"x": 1005,
									"y": 1795
								},
								{
									"x": 916,
									"y": 1795
								}
							]
						}
					},
					{
						"description": "$",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1322,
									"y": 1738
								},
								{
									"x": 1337,
									"y": 1738
								},
								{
									"x": 1337,
									"y": 1792
								},
								{
									"x": 1322,
									"y": 1792
								}
							]
						}
					},
					{
						"description": "8",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1349,
									"y": 1738
								},
								{
									"x": 1364,
									"y": 1738
								},
								{
									"x": 1364,
									"y": 1792
								},
								{
									"x": 1349,
									"y": 1792
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1377,
									"y": 1738
								},
								{
									"x": 1392,
									"y": 1738
								},
								{
									"x": 1392,
									"y": 1792
								},
								{
									"x": 1377,
									"y": 1792
								}
							]
						}
					},
					{
						"description": "80",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1390,
									"y": 1738
								},
								{
									"x": 1440,
									"y": 1738
								},
								{
									"x": 1440,
									"y": 1792
								},
								{
									"x": 1390,
									"y": 1792
								}
							]
						}
					},
					{
						"description": "Japanese",
						"boundingPoly": {
							"vertices": [
								{
									"x": 571,
									"y": 1802
								},
								{
									"x": 699,
									"y": 1802
								},
								{
									"x": 699,
									"y": 1840
								},
								{
									"x": 571,
									"y": 1840
								}
							]
						}
					},
					{
						"description": "Mixed",
						"boundingPoly": {
							"vertices": [
								{
									"x": 706,
									"y": 1802
								},
								{
									"x": 791,
									"y": 1802
								},
								{
									"x": 791,
									"y": 1840
								},
								{
									"x": 706,
									"y": 1840
								}
							]
						}
					},
					{
						"description": "Fried",
						"boundingPoly": {
							"vertices": [
								{
									"x": 807,
									"y": 1802
								},
								{
									"x": 869,
									"y": 1802
								},
								{
									"x": 869,
									"y": 1840
								},
								{
									"x": 807,
									"y": 1840
								}
							]
						}
					},
					{
						"description": "Rice",
						"boundingPoly": {
							"vertices": [
								{
									"x": 877,
									"y": 1802
								},
								{
									"x": 935,
									"y": 1802
								},
								{
									"x": 935,
									"y": 1840
								},
								{
									"x": 877,
									"y": 1840
								}
							]
						}
					},
					{
						"description": "with",
						"boundingPoly": {
							"vertices": [
								{
									"x": 943,
									"y": 1802
								},
								{
									"x": 999,
									"y": 1802
								},
								{
									"x": 999,
									"y": 1840
								},
								{
									"x": 943,
									"y": 1840
								}
							]
						}
					},
					{
						"description": "Diced",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1015,
									"y": 1802
								},
								{
									"x": 1092,
									"y": 1802
								},
								{
									"x": 1092,
									"y": 1840
								},
								{
									"x": 1015,
									"y": 1840
								}
							]
						}
					},
					{
						"description": "Chicken",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1099,
									"y": 1802
								},
								{
									"x": 1208,
									"y": 1802
								},
								{
									"x": 1208,
									"y": 1840
								},
								{
									"x": 1099,
									"y": 1840
								}
							]
						}
					},
					{
						"description": "and",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1222,
									"y": 1802
								},
								{
									"x": 1271,
									"y": 1802
								},
								{
									"x": 1271,
									"y": 1840
								},
								{
									"x": 1222,
									"y": 1840
								}
							]
						}
					},
					{
						"description": "vegetable",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1280,
									"y": 1802
								},
								{
									"x": 1417,
									"y": 1802
								},
								{
									"x": 1417,
									"y": 1840
								},
								{
									"x": 1280,
									"y": 1840
								}
							]
						}
					},
					{
						"description": "Phone",
						"boundingPoly": {
							"vertices": [
								{
									"x": 92,
									"y": 1985
								},
								{
									"x": 243,
									"y": 1985
								},
								{
									"x": 243,
									"y": 2029
								},
								{
									"x": 92,
									"y": 2029
								}
							]
						}
					},
					{
						"description": "Order",
						"boundingPoly": {
							"vertices": [
								{
									"x": 261,
									"y": 1985
								},
								{
									"x": 402,
									"y": 1985
								},
								{
									"x": 402,
									"y": 2029
								},
								{
									"x": 261,
									"y": 2029
								}
							]
						}
					},
					{
						"description": ":",
						"boundingPoly": {
							"vertices": [
								{
									"x": 407,
									"y": 1985
								},
								{
									"x": 419,
									"y": 1985
								},
								{
									"x": 419,
									"y": 2029
								},
								{
									"x": 407,
									"y": 2029
								}
							]
						}
					},
					{
						"description": "9602",
						"boundingPoly": {
							"vertices": [
								{
									"x": 436,
									"y": 1985
								},
								{
									"x": 546,
									"y": 1985
								},
								{
									"x": 546,
									"y": 2029
								},
								{
									"x": 436,
									"y": 2029
								}
							]
						}
					},
					{
						"description": "5616",
						"boundingPoly": {
							"vertices": [
								{
									"x": 569,
									"y": 1985
								},
								{
									"x": 679,
									"y": 1985
								},
								{
									"x": 679,
									"y": 2029
								},
								{
									"x": 569,
									"y": 2029
								}
							]
						}
					},
					{
						"description": "Level",
						"boundingPoly": {
							"vertices": [
								{
									"x": 806,
									"y": 1990
								},
								{
									"x": 899,
									"y": 1990
								},
								{
									"x": 899,
									"y": 2032
								},
								{
									"x": 806,
									"y": 2032
								}
							]
						}
					},
					{
						"description": "1",
						"boundingPoly": {
							"vertices": [
								{
									"x": 914,
									"y": 1990
								},
								{
									"x": 925,
									"y": 1990
								},
								{
									"x": 925,
									"y": 2032
								},
								{
									"x": 914,
									"y": 2032
								}
							]
						}
					},
					{
						"description": ".",
						"boundingPoly": {
							"vertices": [
								{
									"x": 932,
									"y": 1990
								},
								{
									"x": 943,
									"y": 1990
								},
								{
									"x": 943,
									"y": 2032
								},
								{
									"x": 932,
									"y": 2032
								}
							]
						}
					},
					{
						"description": "315",
						"boundingPoly": {
							"vertices": [
								{
									"x": 950,
									"y": 1990
								},
								{
									"x": 1004,
									"y": 1990
								},
								{
									"x": 1004,
									"y": 2032
								},
								{
									"x": 950,
									"y": 2032
								}
							]
						}
					},
					{
						"description": "Elizabeth",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1019,
									"y": 1990
								},
								{
									"x": 1166,
									"y": 1990
								},
								{
									"x": 1166,
									"y": 2032
								},
								{
									"x": 1019,
									"y": 2032
								}
							]
						}
					},
					{
						"description": "St",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1189,
									"y": 1990
								},
								{
									"x": 1219,
									"y": 1990
								},
								{
									"x": 1219,
									"y": 2032
								},
								{
									"x": 1189,
									"y": 2032
								}
							]
						}
					},
					{
						"description": "Melbourne",
						"boundingPoly": {
							"vertices": [
								{
									"x": 1225,
									"y": 1990
								},
								{
									"x": 1421,
									"y": 1990
								},
								{
									"x": 1421,
									"y": 2032
								},
								{
									"x": 1225,
									"y": 2032
								}
							]
						}
					}
				],
			}
		for (let i = 1; i < api2.textAnnotations.length; i++) {
			payments.push(<TouchableOpacity key={i} style={{
				position: 'absolute',
				borderWidth: 0.5,
				borderColor: 'red',
				width: (api2.textAnnotations[i].boundingPoly.vertices[1].x - api2.textAnnotations[i].boundingPoly.vertices[0].x) / this.state.scale0,
				height: (api2.textAnnotations[i].boundingPoly.vertices[2].y - api2.textAnnotations[i].boundingPoly.vertices[0].y) / this.state.scale0,
				left: (api2.textAnnotations[i].boundingPoly.vertices[0].x) /  this.state.scale0,
				top: (api2.textAnnotations[i].boundingPoly.vertices[0].y) /  this.state.scale0,
			}} onPress={() => {
				alert(api2.textAnnotations[i].description)
			}}

			/>)
		}

		// return (
		// 	<ScrollView horizontal={true} contentContainerStyle={styles.contentContainer}>
		// 		<ImageBackground
		// 			style={{width: 1300, height: 868}}
		// 			source={require('./assets/food.jpg')}
		// 		>
		// 			{payments}
		// 		</ImageBackground>
		//
		// 	</ScrollView>
		//
		// );
		return (
			<View style={styles.container}>
				{this.state.tileanh > 1 ? (

						<View style={{width: width * 0.9, height: width * 0.9 / this.state.tileanh, borderWidth: 1, borderColor: 'red'}}>
							<ImageBackground
								resizeMode={'contain'}
								onLoad={e => {
									this.setState({
										scale: e.nativeEvent.source.height / e.nativeEvent.source.width,
										widthAfter: e.nativeEvent.source.width,
										scale0:this.state.width0 / e.nativeEvent.source.width
									});
									console.log({width: e.nativeEvent.source.width, height: e.nativeEvent.source.height})
								}}
								style={{
									width: undefined, alignSelf: 'stretch', flex: 1,
									height: undefined,
								}}
								source={{uri: this.state.imgUrl}}
							>
								{payments}

							</ImageBackground>
						</View>

				) : (
					<View style={{width: width * 0.9 * this.state.tileanh, height: width * 0.9, borderWidth: 1}}>
						<ImageBackground
							resizeMode={'contain'}
							onLoad={e => {
								this.setState({
									scale: e.nativeEvent.source.height / e.nativeEvent.source.width,
									widthAfter: e.nativeEvent.source.width,
									scale0:this.state.width0 / e.nativeEvent.source.width
								});
								console.log({width: e.nativeEvent.source.width, height: e.nativeEvent.source.height})
							}}
							style={{
								width: undefined, alignSelf: 'stretch', flex: 1,
								height: undefined,
							}}
							source={{uri: this.state.imgUrl}}
						>
							{payments}

						</ImageBackground>
					</View>
				)}
				<View style={{width: '100%', height: '40%', borderWidth: 1, backgroundColor: '#fff'}}>
					{/*<Text>*/}
						{/*{this.state.scale} - {this.state.scale0}*/}
					{/*</Text>*/}

				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	contentContainer: {
		paddingVertical: 20
	}
});
