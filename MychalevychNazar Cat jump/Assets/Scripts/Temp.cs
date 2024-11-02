using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Temp : MonoBehaviour
{
    // Start is called before the first frame update

    // Update is called once per frame
    void Start()
    {
        
    Debug.Log("Цей об'єкт буде знищено через 4 секунди");
    Destroy(gameObject, 4f);
    }
}
