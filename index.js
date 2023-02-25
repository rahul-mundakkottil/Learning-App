/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';



// topTab
import VideosB from './src/Tab/videosB'
import ChapterTest from './src/Tab/ChapterTest'
import ResourcesB from "./src/Tab/ResourcesB";
import QnbankB from './src/Tab/QnbankB'


import { ScrollView } from "react-native-gesture-handler";

// stack
import Page01 from './src/Page01'
import Otp from './src/Otp'
import StudentDeatails from './src/StudentDeatails'
import SchoolBoard from './src/SchoolBoard'
import Apptour from './src/Apptour'
import Biology from './src/Biology'
import ChapterVideo from "./src/ChapterVideo";


  // BottomTab
import Home from './src/BottomTab/Home'
import Recent from "./src/BottomTab/Recent";
import Exams from "./src/BottomTab/Exams";
import Profile from './src/BottomTab/Profile'
import Contact from "./src/BottomTab/Contact";

// drower
import DrawerDesign from './src/Drower/DrawerDesign'
import Examcorner from "./src/Drower/Examcorner";
import Scrollfixed from './src/Scrollfixed';
//realm
import RealmApp from './src/Realm/RealmApp'
import RealmStorage from './src/Realm/RealmStorage'

AppRegistry.registerComponent(appName, () => RealmApp);
