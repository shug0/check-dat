# Check Dat
## A web app for sending links & musics to your friends 
Pre-Dev Environement : http://check-dat.firebaseapp.com

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## TO-DO
### Code Quality
- [X] ESLINT w/ Standard JS

### Stack
- [X] React + Styled Components
- [X] Routing (React-router v4)
- [X] Firebase + Instance management with Re-base
- [X] React Storybook

### Features
- [X] Auth with Google/Twitter
- [X] Users session management | Logout
- [ ] Friends 
  * [X] Choosing DB scheme
  * [ ] Display friends in left sidebar
  * [ ] Search people
  * [ ] Add a people to the friendlist
  * [ ] Delete a friend
- [ ] Posts 
  * [ ] Viewing stuffs sended to me
  * [ ] Checked a item 
  * [ ] Give feedback on a item
  * [ ] Tag a item 
  * [ ] Archive a item
- [ ] i18n 
  * [ ] French
  * [ ] English

### Design
- [ ] Finding Inspirations 
- [ ] Fonts
- [ ] Colors Scheme


## Databse Scheme
The app is using firebase for storing data, wich is implicating somes modeling constraints.
The current scheme is :

- users
  * full : { ...fullUserInfos }
  * short: { id: 'username' }
- friends : {
  * user1: {[ { ...useFullFriendInfo } ]}
  * user2: {[ { ...useFullFriendInfo } ]}
- posts : **WIP**
  
  
  
