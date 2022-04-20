import {Address,District,Favorite,MyTour,Participant,Province,Title,Tour,TourPhoto,User,UserInfo,Ward} from "."

Province.hasMany(Tour,{foreignKey: 'location'});
Tour.belongsTo(Province,{
    foreignKey: 'location',
    });
