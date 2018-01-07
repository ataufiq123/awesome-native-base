import React, { Component } from 'react';
import { Image } from 'react-native';
import { 
    Container, 
    Header, 
    Title, 
    Content, 
    Footer, 
    FooterTab, 
    Button, 
    Left, 
    Right, 
    Body, 
    Icon, 
    Text, 
    View, 
    DeckSwiper, 
    Card, 
    CardItem, 
    Thumbnail, } from 'native-base';

export default class Headers extends Component<{}> {
    render() {
        return (
            <Header>
              <Left>
                <Button transparent>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title>Header</Title>
              </Body>
              <Right />
            </Header>
        );
      }
    }