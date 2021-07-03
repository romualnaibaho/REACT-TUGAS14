import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid, Icon, List, Feed, Search, Table, Menu, Container, Label } from "semantic-ui-react";

class App extends Component {
  render(){
    return (
      <div>
        <Container style={{marginTop: "20px"}}>
          <Table celled>
          <Table.Header>
          <Table.Row>
              <Table.HeaderCell textAlign="right" colSpan={2}><Search placeholder="Search Document..." /></Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell textAlign="center">Nama Dokumen</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Jenis File</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Panduang Belahar Javascript</Label>
              </Table.Cell>
              <Table.Cell textAlign="center">PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduang Belahar CSS</Table.Cell>
              <Table.Cell textAlign="center">PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduang Belahar React Js</Table.Cell>
              <Table.Cell textAlign="center">PDF</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>

        <Grid style={{marginTop: "20px"}}>
          <Grid.Row columns={2}>
            <Grid.Column width={12}>
              <Feed size='large'>
                <Feed.Event>
                  <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User>Anton</Feed.User> added you as a friend
                      <Feed.Date>3 Hour Ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like' />4 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label icon='pencil' />
                  <Feed.Content>
                    <Feed.Summary>
                      You submitted a new post to the page
                      <Feed.Date>3 days ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                      Saya senang belajar bahasa pemrograman.
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>11 Likes</Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label image=' https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                  <Feed.Content>
                    <Feed.Date>4 days ago</Feed.Date>
                    <Feed.Summary>
                      David added 2 new images.
                    </Feed.Summary>

                    <Feed.Extra images>
                      <a>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' />
                      </a>
                      <a>
                        <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
                      </a>
                    </Feed.Extra>

                    <Feed.Meta like='2 Like' />
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>
            <Grid.Column width={3}>
            <h3>Website Terkait</h3>
            <List>
              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.google.com'>Google</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.google.com'>Facebook</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.semantic-ui.com'>Semantic UI</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.niomic.com'>NIOMIC</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.react-js.com'>React Js</a>
                </List.Content>
              </List.Item>
              
            </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
