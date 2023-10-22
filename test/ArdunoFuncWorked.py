import serial

# Change the serial port to match your Arduino's port
ser = serial.Serial('COM5', 9600)  # Windows example, on Linux use '/dev/ttyACM0'

def send_command(command):
    ser.write(command.encode())
    response = ser.readline().decode().strip()
    return response

try:
    while True:
        cmd = input("Enter command (C: Check Water, Q: Quit): ")
        if cmd == 'Q':
            break
        elif cmd == 'C':
            response = send_command('C')
            print("Arduino Response:", response)
        else:
            print("Invalid command. Use 'C' or 'Q.")

except KeyboardInterrupt:
    print("Program terminated.")
finally:
    ser.close()
