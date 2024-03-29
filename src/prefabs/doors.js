import Rooms from '../prefabs/rooms';
import Door from '../prefabs/door';

class Doors extends Phaser.Group {

    //initialization code in the constructor
    constructor(game, map) {
        super(game, game.world, 'Doors', false, true, Phaser.Physics.ARCADE);
        this.enableBody = true;
        var doors = [
            {"x": 1952, "y": 8059, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": null, "open": "down", "id": 0, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 1952, "y": 7904, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": null, "open": "down", "id": 1, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 4256, "y": 8059, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": null, "open": "down", "id": 2, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 4256, "y": 7904, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": null, "open": "down", "id": 3, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 6560, "y": 8059, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": null, "open": "down", "id": 4, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 6560, "y": 7904, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": null, "open": "down", "id": 5, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 2112, "y": 6651, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": 85, "open": "down", "id": 6, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 1824, "y": 8059, "sprite": "door_2_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "down", "id": 7, "size": {"x": 64, "y": 5}, "hinge": "left"}},
            {"x": 1824, "y": 7904, "sprite": "door_2_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "down", "id": 8, "size": {"x": 64, "y": 5}, "hinge": "left"}},
            {"x": 4128, "y": 7904, "sprite": "door_2_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "down", "id": 9, "size": {"x": 64, "y": 5}, "hinge": "left"}},
            {"x": 4128, "y": 8059, "sprite": "door_2_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "down", "id": 10, "size": {"x": 64, "y": 5}, "hinge": "left"}},
            {"x": 6432, "y": 7904, "sprite": "door_2_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "down", "id": 11, "size": {"x": 64, "y": 5}, "hinge": "left"}},
            {"x": 6432, "y": 8059, "sprite": "door_2_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "down", "id": 12, "size": {"x": 64, "y": 5}, "hinge": "left"}},
            {"x": 960, "y": 6203, "sprite": "door_2_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 86, "open": "down", "id": 13, "size": {"x": 64, "y": 5}, "hinge": "left"}},
            {"x": 2080, "y": 7488, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": 82, "open": "up", "id": 14, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 6560, "y": 576, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 15, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 6560, "y": 731, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 16, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 9024, "y": 576, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 17, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 9024, "y": 731, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 18, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 2112, "y": 6752, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": 84, "open": "up", "id": 19, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 1952, "y": 4800, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 20, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 4256, "y": 3360, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 21, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 8912, "y": 7387, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 22, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 8000, "y": 7424, "sprite": "door_2_1", "pivot": {"x": 64, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 23, "size": {"x": 64, "y": 5}, "hinge": "right"}},
            {"x": 6432, "y": 576, "sprite": "door_2_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 24, "size": {"x": 64, "y": 5}, "hinge": "left"}},
            {"x": 6432, "y": 731, "sprite": "door_2_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 25, "size": {"x": 64, "y": 5}, "hinge": "left"}},
            {"x": 8896, "y": 576, "sprite": "door_2_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 26, "size": {"x": 64, "y": 5}, "hinge": "left"}},
            {"x": 8896, "y": 731, "sprite": "door_2_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 27, "size": {"x": 64, "y": 5}, "hinge": "left"}},
            {"x": 1824, "y": 4800, "sprite": "door_2_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 28, "size": {"x": 64, "y": 5}, "hinge": "left"}},
            {"x": 4128, "y": 3360, "sprite": "door_2_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 29, "size": {"x": 64, "y": 5}, "hinge": "left"}},
            {"x": 8784, "y": 7387, "sprite": "door_2_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 30, "size": {"x": 64, "y": 5}, "hinge": "left"}},
            {"x": 7872, "y": 7424, "sprite": "door_2_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "up", "id": 31, "size": {"x": 64, "y": 5}, "hinge": "left"}},
            {"x": 864, "y": 7707, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 3, "open": "down", "id": 32, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 3072, "y": 7707, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 4, "open": "down", "id": 33, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 4032, "y": 7707, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 6, "open": "down", "id": 34, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 5376, "y": 7707, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 8, "open": "down", "id": 35, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 6336, "y": 7707, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 10, "open": "down", "id": 36, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 6336, "y": 6267, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 37, "open": "down", "id": 37, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 5376, "y": 6267, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 35, "open": "down", "id": 38, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 3968, "y": 6267, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 34, "open": "down", "id": 39, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 3072, "y": 6267, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 32, "open": "down", "id": 40, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 1152, "y": 6203, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 87, "open": "down", "id": 41, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 7488, "y": 6267, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 38, "open": "down", "id": 42, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 8640, "y": 6267, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 40, "open": "down", "id": 43, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 8640, "y": 4827, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 58, "open": "down", "id": 44, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 7680, "y": 4827, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 56, "open": "down", "id": 45, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 6336, "y": 4827, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 54, "open": "down", "id": 46, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 5376, "y": 4827, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 52, "open": "down", "id": 47, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 9920, "y": 3995, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 66, "open": "down", "id": 48, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 9920, "y": 3163, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 67, "open": "down", "id": 49, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 9952, "y": 1339, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 79, "open": "down", "id": 50, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 8640, "y": 1339, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 78, "open": "down", "id": 51, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 8160, "y": 1339, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 77, "open": "down", "id": 52, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 7680, "y": 1339, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 76, "open": "down", "id": 53, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 7200, "y": 1339, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 75, "open": "down", "id": 54, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 6752, "y": 1755, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 100, "open": "down", "id": 55, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 6752, "y": 3803, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 99, "open": "down", "id": 56, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 6752, "y": 4539, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 98, "open": "down", "id": 57, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 4448, "y": 6683, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 92, "open": "down", "id": 58, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 4448, "y": 5179, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 94, "open": "down", "id": 59, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 4448, "y": 3899, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 96, "open": "down", "id": 60, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 2144, "y": 5243, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 89, "open": "down", "id": 61, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 2208, "y": 7707, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 4, "open": "down", "id": 62, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 1568, "y": 7707, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 0, "open": "down", "id": 63, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 3168, "y": 7707, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 5, "open": "down", "id": 64, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 4512, "y": 7707, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 7, "open": "down", "id": 65, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 5472, "y": 7707, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 9, "open": "down", "id": 66, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 7776, "y": 6267, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 39, "open": "down", "id": 67, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 5472, "y": 6267, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 36, "open": "down", "id": 68, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 3168, "y": 6267, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 33, "open": "down", "id": 69, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 2208, "y": 6267, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 31, "open": "down", "id": 70, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 512, "y": 6267, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 27, "open": "down", "id": 71, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 4512, "y": 4827, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 52, "open": "down", "id": 72, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 5472, "y": 4827, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 53, "open": "down", "id": 73, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 6816, "y": 4827, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 55, "open": "down", "id": 74, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 7776, "y": 4827, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 57, "open": "down", "id": 75, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 8704, "y": 5275, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 106, "open": "down", "id": 76, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 8704, "y": 5947, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 108, "open": "down", "id": 77, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 8704, "y": 4507, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 104, "open": "down", "id": 78, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 9440, "y": 3995, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 66, "open": "down", "id": 79, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 6656, "y": 1339, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 101, "open": "down", "id": 80, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 8736, "y": 1723, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 103, "open": "down", "id": 81, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 9440, "y": 1339, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 79, "open": "down", "id": 82, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 832, "y": 6464, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 11, "open": "up", "id": 83, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 608, "y": 5024, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 30, "open": "up", "id": 84, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 9920, "y": 2368, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 67, "open": "up", "id": 85, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 9536, "y": 1536, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 72, "open": "up", "id": 86, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 7680, "y": 3584, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 64, "open": "up", "id": 87, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 6912, "y": 5024, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 48, "open": "up", "id": 88, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 7872, "y": 5024, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 50, "open": "up", "id": 89, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 6752, "y": 4640, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 97, "open": "up", "id": 90, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 6336, "y": 3583, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 62, "open": "up", "id": 91, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 5376, "y": 3584, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 60, "open": "up", "id": 92, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 5568, "y": 5024, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 46, "open": "up", "id": 93, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 5568, "y": 6464, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 17, "open": "up", "id": 94, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 4448, "y": 7487, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 90, "open": "up", "id": 95, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 4448, "y": 6784, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 91, "open": "up", "id": 96, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 4448, "y": 5280, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 93, "open": "up", "id": 97, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 4608, "y": 5024, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 44, "open": "up", "id": 98, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 4448, "y": 4544, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 95, "open": "up", "id": 99, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 3968, "y": 5024, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 43, "open": "up", "id": 100, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 3264, "y": 6464, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 13, "open": "up", "id": 101, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 2304, "y": 6464, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 12, "open": "up", "id": 102, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 2144, "y": 6048, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 88, "open": "up", "id": 103, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 3072, "y": 5024, "sprite": "door_3_1", "pivot": {"x": 96, "y": 0, "type": 25}, "data": {"room": 41, "open": "up", "id": 104, "size": {"x": 96, "y": 5}, "hinge": "right"}},
            {"x": 2976, "y": 6464, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 12, "open": "up", "id": 105, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 3872, "y": 6464, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 14, "open": "up", "id": 106, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 4512, "y": 6464, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 15, "open": "up", "id": 107, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 5280, "y": 6463, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 16, "open": "up", "id": 108, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 6240, "y": 6463, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 18, "open": "up", "id": 109, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 8704, "y": 6048, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 109, "open": "up", "id": 110, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 8704, "y": 5376, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 107, "open": "up", "id": 111, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 8544, "y": 5024, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 51, "open": "up", "id": 112, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 7584, "y": 5024, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 49, "open": "up", "id": 113, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 6240, "y": 5024, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 47, "open": "up", "id": 114, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 2208, "y": 5024, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 41, "open": "up", "id": 115, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 8704, "y": 4608, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 105, "open": "up", "id": 116, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 9824, "y": 4192, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 65, "open": "up", "id": 117, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 6816, "y": 3584, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 63, "open": "up", "id": 118, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 5472, "y": 3584, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 61, "open": "up", "id": 119, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 4512, "y": 3584, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 59, "open": "up", "id": 120, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 7104, "y": 1536, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 68, "open": "up", "id": 121, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 7584, "y": 1536, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 69, "open": "up", "id": 122, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 8064, "y": 1536, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 70, "open": "up", "id": 123, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 8544, "y": 1536, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 71, "open": "up", "id": 124, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 8736, "y": 1088, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 102, "open": "up", "id": 125, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 9856, "y": 1536, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 72, "open": "up", "id": 126, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 5280, "y": 5024, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 45, "open": "up", "id": 127, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 9344, "y": 4191, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 65, "open": "up", "id": 128, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 3168, "y": 5024, "sprite": "door_3_1", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 42, "open": "up", "id": 129, "size": {"x": 96, "y": 5}, "hinge": "left"}},
            {"x": 6619, "y": 2656, "sprite": "door_1_2", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 81, "open": "right", "id": 130, "size": {"x": 5, "y": 64}, "hinge": "up"}},
            {"x": 9536, "y": 6944, "sprite": "door_1_2", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "right", "id": 131, "size": {"x": 5, "y": 64}, "hinge": "up"}},
            {"x": 9536, "y": 7168, "sprite": "door_1_2", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "right", "id": 132, "size": {"x": 5, "y": 64}, "hinge": "up"}},
            {"x": 9691, "y": 7168, "sprite": "door_1_2", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "right", "id": 133, "size": {"x": 5, "y": 64}, "hinge": "up"}},
            {"x": 9691, "y": 6944, "sprite": "door_1_2", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "right", "id": 134, "size": {"x": 5, "y": 64}, "hinge": "up"}},
            {"x": 10171, "y": 2208, "sprite": "door_1_2", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "right", "id": 135, "size": {"x": 5, "y": 64}, "hinge": "up"}},
            {"x": 10016, "y": 2208, "sprite": "door_1_2", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "right", "id": 136, "size": {"x": 5, "y": 64}, "hinge": "up"}},
            {"x": 10171, "y": 3200, "sprite": "door_1_2", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "right", "id": 137, "size": {"x": 5, "y": 64}, "hinge": "up"}},
            {"x": 10016, "y": 3200, "sprite": "door_1_2", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "right", "id": 138, "size": {"x": 5, "y": 64}, "hinge": "up"}},
            {"x": 1984, "y": 6976, "sprite": "door_1_2", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 83, "open": "left", "id": 139, "size": {"x": 5, "y": 64}, "hinge": "up"}},
            {"x": 6368, "y": 2656, "sprite": "door_1_2", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "left", "id": 140, "size": {"x": 5, "y": 64}, "hinge": "up"}},
            {"x": 8672, "y": 2464, "sprite": "door_1_2", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 81, "open": "left", "id": 141, "size": {"x": 5, "y": 64}, "hinge": "up"}},
            {"x": 6619, "y": 2784, "sprite": "door_1_2", "pivot": {"x": 0, "y": 64, "type": 25}, "data": {"room": 81, "open": "right", "id": 142, "size": {"x": 5, "y": 64}, "hinge": "down"}},
            {"x": 9691, "y": 7296, "sprite": "door_1_2", "pivot": {"x": 0, "y": 64, "type": 25}, "data": {"room": null, "open": "right", "id": 143, "size": {"x": 5, "y": 64}, "hinge": "down"}},
            {"x": 9536, "y": 7296, "sprite": "door_1_2", "pivot": {"x": 0, "y": 64, "type": 25}, "data": {"room": null, "open": "right", "id": 144, "size": {"x": 5, "y": 64}, "hinge": "down"}},
            {"x": 9536, "y": 7072, "sprite": "door_1_2", "pivot": {"x": 0, "y": 64, "type": 25}, "data": {"room": null, "open": "right", "id": 145, "size": {"x": 5, "y": 64}, "hinge": "down"}},
            {"x": 9691, "y": 7072, "sprite": "door_1_2", "pivot": {"x": 0, "y": 64, "type": 25}, "data": {"room": null, "open": "right", "id": 146, "size": {"x": 5, "y": 64}, "hinge": "down"}},
            {"x": 10171, "y": 2336, "sprite": "door_1_2", "pivot": {"x": 0, "y": 64, "type": 25}, "data": {"room": null, "open": "right", "id": 147, "size": {"x": 5, "y": 64}, "hinge": "down"}},
            {"x": 10016, "y": 2336, "sprite": "door_1_2", "pivot": {"x": 0, "y": 64, "type": 25}, "data": {"room": null, "open": "right", "id": 148, "size": {"x": 5, "y": 64}, "hinge": "down"}},
            {"x": 10171, "y": 3328, "sprite": "door_1_2", "pivot": {"x": 0, "y": 64, "type": 25}, "data": {"room": null, "open": "right", "id": 149, "size": {"x": 5, "y": 64}, "hinge": "down"}},
            {"x": 10016, "y": 3328, "sprite": "door_1_2", "pivot": {"x": 0, "y": 64, "type": 25}, "data": {"room": null, "open": "right", "id": 150, "size": {"x": 5, "y": 64}, "hinge": "down"}},
            {"x": 6368, "y": 2784, "sprite": "door_1_2", "pivot": {"x": 0, "y": 64, "type": 25}, "data": {"room": null, "open": "left", "id": 151, "size": {"x": 5, "y": 64}, "hinge": "down"}},
            {"x": 8672, "y": 2592, "sprite": "door_1_2", "pivot": {"x": 0, "y": 64, "type": 25}, "data": {"room": 81, "open": "left", "id": 152, "size": {"x": 5, "y": 64}, "hinge": "down"}},
            {"x": 667, "y": 5728, "sprite": "door_1_3", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 28, "open": "right", "id": 153, "size": {"x": 5, "y": 96}, "hinge": "up"}},
            {"x": 9056, "y": 896, "sprite": "door_1_3", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 80, "open": "left", "id": 154, "size": {"x": 5, "y": 96}, "hinge": "up"}},
            {"x": 9056, "y": 1952, "sprite": "door_1_3", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 73, "open": "left", "id": 155, "size": {"x": 5, "y": 96}, "hinge": "up"}},
            {"x": 9088, "y": 2976, "sprite": "door_1_3", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": null, "open": "left", "id": 156, "size": {"x": 5, "y": 96}, "hinge": "up"}},
            {"x": 9216, "y": 2976, "sprite": "door_1_3", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 67, "open": "left", "id": 157, "size": {"x": 5, "y": 96}, "hinge": "up"}},
            {"x": 1152, "y": 7072, "sprite": "door_1_3", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 2, "open": "left", "id": 158, "size": {"x": 5, "y": 96}, "hinge": "up"}},
            {"x": 1152, "y": 7488, "sprite": "door_1_3", "pivot": {"x": 0, "y": 0, "type": 25}, "data": {"room": 1, "open": "left", "id": 159, "size": {"x": 5, "y": 96}, "hinge": "up"}},
            {"x": 955, "y": 7008, "sprite": "door_1_3", "pivot": {"x": 0, "y": 96, "type": 25}, "data": {"room": 11, "open": "right", "id": 160, "size": {"x": 5, "y": 96}, "hinge": "down"}},
            {"x": 667, "y": 5568, "sprite": "door_1_3", "pivot": {"x": 0, "y": 96, "type": 25}, "data": {"room": 29, "open": "right", "id": 161, "size": {"x": 5, "y": 96}, "hinge": "down"}},
            {"x": 1787, "y": 6880, "sprite": "door_1_3", "pivot": {"x": 0, "y": 96, "type": 25}, "data": {"room": 2, "open": "right", "id": 162, "size": {"x": 5, "y": 96}, "hinge": "down"}},
            {"x": 8814, "y": 7584, "sprite": "door_1_3", "pivot": {"x": 0, "y": 96, "type": 25}, "data": {"room": 23, "open": "right", "id": 163, "size": {"x": 5, "y": 96}, "hinge": "down"}},
            {"x": 7835, "y": 7680, "sprite": "door_1_3", "pivot": {"x": 0, "y": 96, "type": 25}, "data": {"room": 19, "open": "right", "id": 164, "size": {"x": 5, "y": 96}, "hinge": "down"}},
            {"x": 9056, "y": 1792, "sprite": "door_1_3", "pivot": {"x": 0, "y": 96, "type": 25}, "data": {"room": 74, "open": "left", "id": 165, "size": {"x": 5, "y": 96}, "hinge": "down"}},
            {"x": 9216, "y": 2560, "sprite": "door_1_3", "pivot": {"x": 0, "y": 96, "type": 25}, "data": {"room": 67, "open": "left", "id": 166, "size": {"x": 5, "y": 96}, "hinge": "down"}},
            {"x": 9088, "y": 2560, "sprite": "door_1_3", "pivot": {"x": 0, "y": 96, "type": 25}, "data": {"room": null, "open": "left", "id": 167, "size": {"x": 5, "y": 96}, "hinge": "down"}},
            {"x": 1152, "y": 6880, "sprite": "door_1_3", "pivot": {"x": 0, "y": 96, "type": 25}, "data": {"room": 2, "open": "left", "id": 168, "size": {"x": 5, "y": 96}, "hinge": "down"}},
            {"x": 8032, "y": 7680, "sprite": "door_1_3", "pivot": {"x": 0, "y": 96, "type": 25}, "data": {"room": 23, "open": "left", "id": 169, "size": {"x": 5, "y": 96}, "hinge": "down"}}
        ];
        
        for (let door of doors){
            var door_obj = this.add(new Door(game, door.x, door.y, door.sprite));
            door_obj.data = door.data;
            door_obj.pivot.x = door.pivot.x;
            door_obj.body.immovable = true;
            door_obj.pivot.y = door.pivot.y;
        }
        Rooms.set_doors(this);
    }

    //Code ran on each frame of game
    update() {

    }

}

export default Doors;
