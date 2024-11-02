using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Temp : MonoBehaviour
{
    private int max = 20;
    // Start is called before the first frame update
    void Start()
    {
        for(int i = 1;i<max+1;i+=2)
        {
            Debug.Log(i);
        }
        Debug.Log("Цей об'єкт буде вилучено через 4 секунди.");
        Destroy(gameObject, 4f);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
