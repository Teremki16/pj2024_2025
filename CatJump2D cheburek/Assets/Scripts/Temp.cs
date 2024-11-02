using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Temp : MonoBehaviour
{
    void Start()
    {
        for (int i = 1; i < 21; i += 2)
        {
            Debug.Log(i);
        }
        Debug.Log("Цей об'єкт буде знищено через 4 секунди");
        Destroy(gameObject, 4f);
    }
}

