const sequelize = require('../config/connection');
const { User, Profile } = require('../models');

const profiledata = [
    {
        profile_image: 'https://images.pexels.com/photos/3031397/pexels-photo-3031397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        user_location: 'slc',
        user_phone: 1234567890,
        user_experience: true,
        has_gear: true,
        social: true,
        location: 596785
    },
    {
        profile_image: 'https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg',
        user_location: 'kamas',
        user_phone: 134526785,
        user_experience: true,
        has_gear: true,
        social: true,
        location: 596785
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
        profile_image: 'https://image.shutterstock.com/mosaic_250/2780032/1667439913/stock-photo-headshot-portrait-of-smiling-millennial-male-employee-talk-on-video-call-or-web-conference-in-1667439913.jpg',
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
        profile_image: 'https://image.shutterstock.com/image-photo/handsome-man-portrait-260nw-1266937855.jpg',
        user_location: 'logan',
        user_phone: 2635464563,
        user_experience: true,
        has_gear: true,
        social: true,
        location: 596785
    },
    {
        profile_image: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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