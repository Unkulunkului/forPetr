public class Room {
    int numberOfWindows;
    Window [] windows; //создаем массив типа Window. Т.к. окон несколько, то нужен массив. Если бы оно было бы одно, то
    //было бы так же, как и с дверью. Ниже дверь
    Door door;


    public Room(int win){         // Этот конструктор для того, чтобы сразу указать кол-во дверей и таким образом
        numberOfWindows = win;    // ты устанавливаешь размерность массива
        windows = new Window[win];
    }

    public void setDoor(Door door){  //Ты сейчас в классе комната, поэтому в нем тебе нужен метод установки двери
        this.door = door; //В классе мейн в скобки ты передашь объект, который ты сделаешь для двери (5-7 строки)
    }

    public void setWindows(Window windows) {           //Тут ты добавляешь окно при вызове этого метода в массив
        for (int i = 0; i < this.windows.length; i++) {
            if(this.windows[i] == null){ //если элемент пустой, то окно добавляется. если нет, то проверяет след элемент
                this.windows[i] = windows;
                return; //как только окно добавилось, цикл фор останавливает и метод завершается
                //один вызов такого метода - одно добавленное окно
            }
        }
    }
    public void getInfo(int numberOfWindows){ //метод дает информацию об окнах и дверях. В скобках номер окна,т.к. их несколько
        //можно два номера и соответственно выводить информацию о разных окнах
        System.out.println(windows[numberOfWindows].isOpen()); //тру или фолс - открыто или закрыто окно
        System.out.println(windows[numberOfWindows].getColor());//цвет окна
        System.out.println(door.getColor());//цвет двери
        //метод getColor или isOpen находятся в классах дверь и окно
    }
    public void openWindow(int numberOfWindows){ //метод открывает окно по номеру окна
        windows[numberOfWindows].setOpen(true); //опять же метод сет опен в классе окно
    }
}
