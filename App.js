import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
	Image,
	ScrollView,
	Dimensions,
	StatusBar
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import PinchZoomView from 'react-native-pinch-zoom-view';
const {width, height} = Dimensions.get('window');
import api from './api';
import api4 from './api2';
import api3 from './api3';
import api2 from './api4';
export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			scale: 1,
			scale0: 1,
			width0: 0,
			height0: 0,
			widthAfter: 0,
			tileanh: 0,
			// anh doc
			// imgUrl: 'https://b.zmtcdn.com/data/menus/480/18401480/b6634a2cd7bca64a7a0d00a46c4d8099.jpg'
			imgUrl: 'http://kaizencampbell.com/images/menu/w1.jpg'
			// anh ngang
			// imgUrl: 'https://previews.123rf.com/images/kaisorn/kaisorn1605/kaisorn160500023/58388053-japanese-food-menu-restaurant-brochure-design-template.jpg'
		};
	}
	componentDidMount() {
		Image.getSize(this.state.imgUrl, (width, height) => {
			this.setState({width0: width, height0: height});
			this.setState({tileanh: width/height});
			console.log({width0: width, height0: height});
		}, (err) => {
			console.log(err)
		});
	}

	render() {
		const payments = [];




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
		return (
			<View style={styles.container}>
				<StatusBar/>
				{this.state.tileanh > 1 ? (

						<View style={{width: width * 0.9, height: width * 0.9 / this.state.tileanh, borderWidth: 1, borderColor: 'red'}}>
							<ImageBackground
								resizeMode={'contain'}
								onLoad={e => {
									this.setState({
										scale: e.nativeEvent.source.height / e.nativeEvent.source.width,
										widthAfter: e.nativeEvent.source.width,
										scale0:this.state.width0 / (width * 0.9)
									});
									console.log({width: e.nativeEvent.source.width, height: e.nativeEvent.source.height, thucte: width * 0.9})
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
									scale0:this.state.width0 / ( width * 0.9 * this.state.tileanh)
								});
								console.log({width: e.nativeEvent.source.width, height: e.nativeEvent.source.height, thucte: width * 0.9 * this.state.tileanh})
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
