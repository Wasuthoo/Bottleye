import serial
import time

def send_command():
    try:
        ser = serial.Serial('COM5', 9600)  # Windows example, on Linux use '/dev/ttyACM0'
        time.sleep(2)
        command = 'C'
        ser.write(command.encode())
        # ser.timeout = 2
        response = ser.readline().decode().strip()
        print("Arduino Response:", response)
        return response
    
    except Exception as e:
        return str(e)
    finally:
        ser.close()
