using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEditor.EventSystems;
using UnityEngine.EventSystems;

public class BackwardPedalController : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
{
    [SerializeField] Sprite pedalDown, PedalUp;
    [SerializeField] GameObject car;
 

   public void OnPointerDown(PointerEventData a)
    {
        GetComponent<Image>().sprite = pedalDown;
        car.GetComponent<CarController>().bp = true;
    }
    public void OnPointerUp(PointerEventData a)
    {
        GetComponent<Image>().sprite = PedalUp;
        car.GetComponent<CarController>().bp = false;
    }
}
