import serial
import time

ser = serial.Serial('COM4', 9600)
time.sleep(2)
ser.write(b'H')
