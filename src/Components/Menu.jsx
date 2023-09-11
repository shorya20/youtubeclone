import React from 'react'
import styled from 'styled-components'
import Utube from "../imgs/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import HistoryIcon from '@mui/icons-material/History';
const Container = styled.div`
  flex:1;
  background-color: #202020;
  height:100vh;
  color: white;
  font-size: 0.8rem;
`
const Wrapper = styled.div`
  padding: 1.125rem 1.625rem;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`
const Item = styled.div`
  display: flex;
  align-items: center;
  gap:20px;
  cursor: pointer;
`

const Img  = styled.img`
  height:3rem;
`
export const menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={Utube} alt="logo"/>
          STube
        </Logo>
        <hr style={{border:"1px solid #303030", width:"100%", margin:"1rem 0"}}/>
        <Item>
          <HomeIcon/> Home
        </Item>   
        <Item>
          <ExploreIcon/> Explore
        </Item>
        <Item>
          <SubscriptionsIcon/> Subscriptions
        </Item>
        <hr style={{border:"1px solid #303030", width:"100%", margin:"1rem 0"}}/>
        <Item>
          <VideoLibraryIcon/> Library
        </Item>
        <Item>
          <HistoryIcon/> History
        </Item>
        <hr style={{border:"1px solid #303030", width:"100%", margin:"1rem 0"}}/>
        <Item>  
          <LibraryMusicIcon/> Music
        </Item>  
        <Item>
          <SportsSoccerIcon/> Sports
        </Item>
        <Item>
          <SportsEsportsIcon/> Gaming
        </Item>
        <Item>
          <MovieCreationIcon/> Movies
        </Item>
        <Item>
          <NewspaperIcon/> News
        </Item>
        <Item>
          <LiveTvIcon/> Live
        </Item>
        <Item>
          <SettingsIcon/> Settings
        </Item>
        <Item>
          <ReportIcon/> Report history
        </Item>
        <Item>
          <HelpIcon/> Help
        </Item>
        <Item>
          <SettingsBrightnessIcon/> Dark theme
        </Item>
      </Wrapper>
    </Container>
  )
}
export default menu
