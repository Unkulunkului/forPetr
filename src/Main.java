public class Main {
    public static void main(String[] args) {
        Room room = new Room(2); //создаешь комнату и указываешь количество дверей. В классе дверь написано про цифру 2

        Door door = new Door(); //создаешь объект класса дверь
        door.setColor("Yellow"); //красишь дверь. Этот метод будет в классе дверь
        room.setDoor(door); //добавляешь созданную и покрашенную дверь в комнату


        Window firstWindow = new Window(); //создаешь первое окно
        Window secondWindow = new Window(); //второе окно

        firstWindow.setColor("Blue"); //красишь и вырезаешь окна по размеру с помощью методов, которые находятся в
        firstWindow.setSize(2);       //классе окно
        secondWindow.setColor("Red");
        secondWindow.setSize(4);

        room.setWindows(firstWindow); //готовые окна вставляешь в комнату
        room.setWindows(secondWindow); //то, как они добавляются в комнату можно увидеть в классе комната
            //окна будут находится в массиве. Т.е. первый элемент будет содержать цвет, размер и положение первого окна
            //второй элемент второго окна и т.д.


        room.openWindow(1); //метод открывает окно. Сам метод в комнате, т.к. окно открывается с комнаты
        room.getInfo(1); //информация об уже установленных окнах и двери

    }
}
