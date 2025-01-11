using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class Left : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
{
    public void OnPointerDown(PointerEventData a)
    {
        GameObject.Find("Player").GetComponent<CarMovement>().L = true;
    }
    public void OnPointerUp(PointerEventData a)
    {
        GameObject.Find("Player").GetComponent<CarMovement>().L = false;
    }
}


