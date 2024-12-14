using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEditor.EventSystems;
using UnityEngine.EventSystems;

public class ForwardPedalController : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
{
    [SerializeField] Sprite pedalDown, PedalUp;
    [SerializeField] GameObject car;
 

   public void OnPointerDown(PointerEventData a)
    {
        GetComponent<Image>().sprite = pedalDown;
    }
    public void OnPointerUp(PointerEventData a)
    {
        GetComponent<Image>().sprite = PedalUp;
    }
}
