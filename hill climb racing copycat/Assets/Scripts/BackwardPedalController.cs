using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEditor.EventSystems;
using UnityEngine.EventSystems;
public class BackwardPedalController : MonoBehaviour,
    IPointerDownHandler, IPointerUpHandler
{
    [SerializeField] Sprite pedalDown, pedalUp;
    [SerializeField] GameObject car;

    public void OnPointerDown(PointerEventData a)
    {
        GetComponent<Image>().sprite = pedalDown;
        car.GetComponent<CarController>().fp = true;
    }
    public void OnPointerUp(PointerEventData a)
    {
        GetComponent<Image>().sprite = pedalUp;
        car.GetComponent<CarController>().fp = false;
    }
}
