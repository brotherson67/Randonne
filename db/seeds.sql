INSERT INTO user (username) 
VALUES
    ('plaindemon'),
    ('blueshark'),
    ('greenberry'),
    ('1000_Autumns'),
    ('petalday'),
    ('crispy_shots'),
    ('climbing_rocks'),
    ('climber1'),
    ('holdup'),
    ('lock_gear');


-- selects all from the users table
SELECT * FROM user;

-- deletes from the users table
-- DELETE FROM user
-- WHERE user_name = "blueshark";

INSERT INTO experience (climb_type, rocktype, climb_level) 
VALUES
    ('mountaineering', 'info', 3),
    ('top rope', 'info', 4),
    ('boulder','info', 10),
    ('mountaineering', 'info', 9),
    ('sport', 'info', 8),
    ('boulder', 'info', 7),
    ('mountaineering', 'info', 4),
    ('boulder', 'info', 4),
    ('free solo', 'info', 10),
    ('boulder', 'info', 9);


-- selects all from experience table
SELECT * FROM experience;



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


-- selects all from work table
SELECT * FROM work;