import {
  Address,
  District,
  Favorite,
  MyTour,
  Participant,
  Province,
  Title,
  Tour,
  TourPhoto,
  User,
  UserInfo,
  Ward,
} from ".";

Province.hasMany(Tour, { foreignKey: "location" });
Tour.belongsTo(Province, {
  foreignKey: "location",
});

User.belongsToMany(Tour, { through: Participant, foreignKey: "userid" });
Tour.belongsToMany(User, { through: Participant, foreignKey: "tourid" });

Tour.hasMany(TourPhoto, { foreignKey: "tourid" });
TourPhoto.belongsTo(Tour, { foreignKey: "tourid" });

//USER
User.belongsTo(UserInfo, { foreignKey: "infoid" });
UserInfo.hasOne(User, { foreignKey: "infoid" });

User.belongsTo(Title, { foreignKey: "level" });
Title.hasMany(User, { foreignKey: "level" });
