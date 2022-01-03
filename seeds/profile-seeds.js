const sequelize = require('../config/connection');
const { User, Profile } = require('../models');

const profiledata = [
    {
        profile_image: 'https://coloradomountainschool.com/wp-content/uploads/2018/04/Rock-Climbing-in-Boulder-Canyon-Colorado.jpg',
        user_location: 'slc',
        user_phone: 1234567890,
        user_experience: true,
        has_gear: true,
        social: true,
        location: 596785,
        score: 9
    },
    {
        profile_image: 'https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/15/81/279616_31645_L2.jpg',
        user_location: 'kamas',
        user_phone: 134526785,
        user_experience: true,
        has_gear: true,
        social: true,
        location: 596785,
        score: 8
    },
    {
        profile_image: 'https://thumbs.dreamstime.com/b/head-shot-portrait-social-networks-dating-application-profile-picture-attractive-young-happy-indian-arabic-mixed-race-woman-203598050.jpg',
        user_location: 'park city',
        user_phone: 7659872341,
        user_experience: true,
        has_gear: true,
        social: true,
        location: 596785
    },
    {
        profile_image: 'https://www.marinij.com/wp-content/uploads/2021/08/MIJ-L-CLIMBING-0821-01.jpg',
        user_location: 'slc',
        user_phone: 543672789,
        user_experience: true,
        has_gear: true,
        social: true,
        location: 596785
    },
    {
        profile_image: 'https://media.gettyimages.com/photos/profile-of-young-womans-face-picture-id1137851574?s=612x612',
        user_location: 'provo',
        user_phone: 9878766765,
        user_experience: true,
        has_gear: true,
        social: true,
        location: 596785
    },
    {
        profile_image: 'https://img.freepik.com/free-photo/self-portrait-beautiful-chinese-girl_1262-18293.jpg?size=626&ext=jpg',
        user_location: 'ogden',
        user_phone: 9879879999,
        user_experience: true,
        has_gear: true,
        social: true,
        location: 596785
    },
    {
        profile_image: 'https://media.timesfreepress.com/img/photos/2020/08/21/1598032599_Belcher_Web_gs_t1070_h9b4b1c54e5fdc980bbcdb528723a0aa48d122e2a.jpg',
        user_location: 'logan',
        user_phone: 2635464563,
        user_experience: true,
        has_gear: true,
        social: true,
        location: 596785
    },
    {
        profile_image: 'https://i.natgeofe.com/n/e5480624-48f3-44e7-8ff1-a8d8a7a08c49/h_20.93123346_square.JPG',
        user_location: 'slc',
        user_phone: 3452342345,
        user_experience: true,
        has_gear: true,
        social: true,
        location: 596785
    },
    {
        profile_image: 'https://annemariesegal.files.wordpress.com/2017/04/adobestock_116914002-cropped-young-woman-suit.jpg?w=300&h=295',
        user_location: 'west valley',
        user_phone: 2345649876,
        user_experience: true,
        has_gear: true,
        social: true,
        location: 596785
    },
    {
        profile_image: 'https://get.investors.com/wp-content/uploads/2020/10/img-student-backpack.jpg',
        user_location: 'kearns',
        user_phone: 0987654321,
        user_experience: true,
        has_gear: true,
        social: true,
        location: 596785
    }
]

const seedProfiles = () => Profile.bulkCreate(profiledata);

module.exports = seedProfiles;