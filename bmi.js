import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class BMI extends Component {
    constructor(props) {
        super(props);
        this.state = {weight: '0', height: '0', bmi: 0, obesity: 'None',};
        this.compute = this.compute.bind(this);
    }

    compute() {
        console.log('On pressed!');
        let weight = parseFloat(this.state.weight);
        let height = parseFloat(this.state.height);

        this.setState({bmi: weight / Math.pow(height / 100, 2)});
        if (this.state.bmi >= 32) {
            this.setState({obesity: 'Obese'});
        } else if (this.state.bmi >= 25 && this.state.bmi < 32) {
            this.setState({obesity: 'Over Weight'});
        } else if (this.state.bmi >= 18.5 && this.state.bmi < 25) {
            this.setState({obesity: 'Normal Weight'});
        } else if (this.state.bmi < 18.5) {
            this.setState({obesity: 'Under Weight'});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.group}>
                    <Text style={styles.title}>Weight (KG)</Text>
                    <TextInput style={styles.input}
                               keyboardType='numeric'
                               value={this.state.weight}
                               onChangeText={(weight) => this.setState({weight})}/>
                </View>
                <View style={styles.group}>
                    <Text style={styles.title}>Height (CM)</Text>
                    <TextInput style={styles.input}
                               keyboardType='numeric'
                               value={this.state.height}
                               onChangeText={(height) => this.setState({height})}
                    />
                </View>
                <View style={styles.center}>
                    <View style={styles.group}>
                        <Text style={styles.title}>BMI: {this.state.bmi.toFixed(2)}</Text>
                        <Text style={styles.obesity}>Obesity : {this.state.obesity}</Text>
                    </View>
                    <View style={styles.group}>
                        <TouchableOpacity style={styles.button}
                                          onPress={this.compute}>
                            <Text style={styles.buttonText}>Compute</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 20
    },
    group: {
        marginTop: 20
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 20,
        borderWidth: 1
    },
    buttonText: {
        fontSize: 30
    },
    input: {
        marginTop: 10,
        padding: 10,
    },
    title: {
        fontSize: 20
    },
    center: {
        alignItems: 'center'
    },
    obesity: {
        fontSize: 20,
    }
});

