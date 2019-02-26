import React, {Component} from 'react';
import {StyleSheet, Text, View, AppRegistry, Button, TextInput} from 'react-native';

class Task extends Component{
    constructor(props){
        super(props)
        this.state = {edit:false}
        this.state ={text:""}
    }
    edit = () => this.setState({edit:true});
    delete = () => this.props.deleteBlock(this.props.index)
    save = () => this.setState({edit:false})
    rendNorm = () => {
        return (
            <View>
                <Text>{this.state.text}</Text>
                <Button onPress = {this.edit} title="EDIT"/>
                <Button onPress = {this.delete} title="DELETE"/>
            </View>
        )
    }
    rendEdit = () => {
        return (
            <View>
                <TextInput  placeholder="WRITE HERE" onChangeText={text=>this.setState({text})} value={this.state.text}/>
                <Button onPress={this.save} title="SAVE"/>
            </View>
        )
    }
    render(){
        if(this.state.edit === true) return this.rendEdit()
        else return this.rendNorm()
    }
}

export default class App extends Component<Props> {
    constructor(props){
        super(props)
        this.state = {task:[]}
    }
    add = () => {
        let arr = this.state.task;
        arr.push('');
        this.setState({task:arr});
    }
    removeElementFromArrayByIndex =(array, index) => {
        delete array[index];
        return array.filter(item => item != undefined);
    }
    deleteBlock = (i) =>{
        let arr = this.removeElementFromArrayByIndex(this.state.task,i)
        this.setState({task:arr});
    }
    eachTask = (item,i) => <Task key ={i} index = {i}  deleteBlock={this.deleteBlock}>{item}</Task>

    render() {
        return (
            <View>
                <Button onPress={this.add} title={"NEW TASK"}/>
                {this.state.task.map(this.eachTask)}
            </View>
        );
    }
}
//1. Can watch tasks;done
//2. Can add tasks;done
//3. Can edit tasks;done
//4. Can save tasks; done
//5. Can delete task;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
