using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class ForwardPedalControler : MonoBehaviour,
    IPointerDownHandler, IPointerUpHandler
{
    [SerializeField] Sprite pedalDown, pedalUp;
    [SerializeField] GameObject car;

    public void OnPointerUp(PointerEventData a)
    {
        GetComponent<Image>().sprite = pedalDown;
    }

    public void OnPointerDown(PointerEventData a) {
        GetComponent<Image>().sprite = pedalUp;
    }
}
