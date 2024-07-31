import cv2
import numpy as np
import tensorflow as tf

def image_classification():
    # Specify the correct file path when loading the model.
    model = tf.keras.models.load_model("my_model.h5") 
    
    def predict_func(img):
        # plt.figure(figsize=(6,4))
        # plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
        # plt.tight_layout()
        img = cv2.resize(img, (224, 224))
        img = np.reshape(img, [-1, 224, 224,3])
        result = np.argmax(model.predict(img))
        if result == 0 : 
            print("\033[94m"+"This image -> Not Bottle"+"\033[0m")
            return 0
        elif result ==1 : 
            print("\033[94m"+"This image -> Bottle"+"\033[0m")
            return 1

    test_img = cv2.imread("img\captured_image.jpg")

    return predict_func(test_img)