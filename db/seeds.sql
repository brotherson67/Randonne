<<<<<<< HEAD
<<<<<<< HEAD
-- INSERT INTO user (username) 
=======
-- INSERT INTO user (username, email, password)
>>>>>>> 4cba384d8def5744abc7613c0926d5770cfdc751
-- VALUES
--     ('plaindemon','plain@demon.com' ,'demonplain1'),
--     ('blueshark', 'blue@shark.com','sharkblue1' ),
--     ('greenberry','green@berry.com','berrygreen1'),
--     ('1000_Autumns','1000@autumns.com','autumns1000' ),
--     ('petalday', 'petal@day.com', 'daypetal1'),
--     ('crispy_shots','crispy@shots.com' , 'shotscrispy1'),
--     ('climbing_rocks', 'climbing@rocks.com', 'rocksclimbing1'),
--     ('climber1','climber@1.com','1climb'),
--     ('holdup', 'hold@up.com', 'uphold1'),
--     ('lock_gear', 'lock@gear.com' , 'gearlock1');


-- -- selects all from the users table
-- SELECT * FROM user;

-- -- deletes from the users table
-- -- DELETE FROM user
-- -- WHERE user_name = "blueshark";

-- INSERT INTO profile (profile_image, user_location, user_phone, user_experience, has_gear, social, location) 
-- VALUES
--     ('url', 'slc', 1234567890, 'true', 'false', 'false', 596785),
--     ('url', 'kamas', 0987654321, 'true', 'true', 'true', 6567),
--     ('url', 'parkcity', 2345649876, 'true', 'true', 'false', 4874578),
--     ('url', 'logan', 3452342345, 'false', 'true', 'true', 9586897),
--     ('url', 'slc', 2635464563, 'true', 'true', 'true', 954765487),
--     ('url', 'slc', 9879879999, 'false', 'true', 'false', 659858),
--     ('url', 'provo', 9878766765, 'true', 'false', 'true', 8675765),
--     ('url', 'ogden', 543672789, 'false', 'false', 'false', 564868),
--     ('url', 'provo', 7659872341, 'true', 'false', 'true', 786879),
--     ('url', 'slc', 134526785, 'false', 'true', 'true', 4756876);




<<<<<<< HEAD
-- selects all from experience table
=======
-- -- selects all from experience table
>>>>>>> 4cba384d8def5744abc7613c0926d5770cfdc751
-- SELECT * FROM profile;



-- INSERT INTO gear (clips, climbing_shoes, chalk, harness, dry_rope, helmet, locking_carabiners) 
-- VALUES
    -- (true, true, true, true, true, true, true),
--     (false, false, true, true, true, false, true),
--     (true, true, true, true, true, true, true),
--     (true, true, true, true, true, true, true),
--     (false, false, false, true, true, false, false),
--     (true, true, true, true, true, true, true),
--     (false, false, true, true, true, false, true),
--     (true, true, true, true, true, true, true),
--     (true, true, true, true, true, true, true),
--     (false, false, true, true, true, false, true);


-- -- selects all from gear table
-- SELECT * FROM gear;

-- -- need to add foreign keys
-- INSERT INTO social (social_level, description) 
-- VALUES
--     (3, 'quiet'),
--     (4, 'likes some chatting'),
--     (10, 'loves to socialize'),
--     (9, 'social aspect is so important'),
--     (8, 'likes meeting new people'),
--     (7, 'loves to learn'),
--     (4, 'Likes some conversation but not continuous'),
--     (4, ' neither likes or dislikes'),
--     (10, 'loves everything about climbing and talking'),
--     (9, 'likes people');


-- -- selects all from social table
-- SELECT * FROM social;

-- INSERT INTO work (schedule, description) 
-- VALUES
--     ('S,M,T,W', 'add info'),
--     ('S,M,T,Th,S', 'Wednesday and saturday'),
--     ('S,M,Th,F,S','Tuesday Wednesday off days'),
--     ('S,M,T,W', 'works first half of week everyweek'),
--     ('S,M,T,W,T,F,S', 'busy schedule but has 5 weeks of vacay time'),
--     ('S,M,W,F,S', 'add info'),
--     ('S,M,W,S', 'schedule changes weekly'),
--     ('S,M,T,F,S', 'Works these days but off when they are slow at work'),
--     ('S,M,T,W,F', 'add info'),
--     ('S,M,T,W,S', 'add info');
=======
INSERT INTO user (username) 
VALUES
    ('plaindemon','plain@demon.com' ,'demonplain1'),
    ('blueshark', 'blue@shark.com','sharkblue1' ),
    ('greenberry','green@berry.com','berrygreen1'),
    ('1000_Autumns','1000@autumns.com','autumns1000' ),
    ('petalday', 'petal@day.com', 'daypetal1'),
    ('crispy_shots','crispy@shots.com' , 'shotscrispy1'),
    ('climbing_rocks', 'climbing@rocks.com', 'rocksclimbing1'),
    ('climber1','climber@1.com','1climb'),
    ('holdup', 'hold@up.com', 'uphold1'),
    ('lock_gear', 'lock@gear.com' , 'gearlock1');


-- selects all from the users table
SELECT * FROM user;

-- deletes from the users table
-- DELETE FROM user
-- WHERE user_name = "blueshark";

INSERT INTO profile (profile_image, user_location, user_phone, user_experience, has_gear, social, location) 
VALUES
    ('url', 'slc', 1234567890, 'true', 'false', 'false', 596785, 8),
    ('url', 'kamas', 0987654321, 'true', 'true', 'true', 6567, 9),
    ('url', 'parkcity', 2345649876, 'true', 'true', 'false', 4874578),
    ('url', 'logan', 3452342345, 'false', 'true', 'true', 9586897),
    ('url', 'slc', 2635464563, 'true', 'true', 'true', 954765487),
    ('url', 'slc', 9879879999, 'false', 'true', 'false', 659858),
    ('url', 'provo', 9878766765, 'true', 'false', 'true', 8675765),
    ('url', 'ogden', 543672789, 'false', 'false', 'false', 564868),
    ('url', 'provo', 7659872341, 'true', 'false', 'true', 786879),
    ('url', 'slc', 134526785, 'false', 'true', 'true', 4756876);




selects all from experience table
SELECT * FROM profile;



INSERT INTO gear (clips, climbing_shoes, chalk, harness, dry_rope, helmet, locking_carabiners) 
VALUES
    (true, true, true, true, true, true, true),
    (false, false, true, true, true, false, true),
    (true, true, true, true, true, true, true),
    (true, true, true, true, true, true, true),
    (false, false, false, true, true, false, false),
    (true, true, true, true, true, true, true),
    (false, false, true, true, true, false, true),
    (true, true, true, true, true, true, true),
    (true, true, true, true, true, true, true),
    (false, false, true, true, true, false, true);


-- selects all from gear table
SELECT * FROM gear;

-- need to add foreign keys
INSERT INTO social (social_level, description) 
VALUES
    (3, 'quiet'),
    (4, 'likes some chatting'),
    (10, 'loves to socialize'),
    (9, 'social aspect is so important'),
    (8, 'likes meeting new people'),
    (7, 'loves to learn'),
    (4, 'Likes some conversation but not continuous'),
    (4, ' neither likes or dislikes'),
    (10, 'loves everything about climbing and talking'),
    (9, 'likes people');


-- selects all from social table
SELECT * FROM social;

INSERT INTO work (schedule, description) 
VALUES
    ('S,M,T,W', 'add info'),
    ('S,M,T,Th,S', 'Wednesday and saturday'),
    ('S,M,Th,F,S','Tuesday Wednesday off days'),
    ('S,M,T,W', 'works first half of week everyweek'),
    ('S,M,T,W,T,F,S', 'busy schedule but has 5 weeks of vacay time'),
    ('S,M,W,F,S', 'add info'),
    ('S,M,W,S', 'schedule changes weekly'),
    ('S,M,T,F,S', 'Works these days but off when they are slow at work'),
    ('S,M,T,W,F', 'add info'),
    ('S,M,T,W,S', 'add info');
>>>>>>> c8b8aa5daff8101796c1c0b561f08efbc91b5d2d


-- -- selects all from work table
-- SELECT * FROM work;