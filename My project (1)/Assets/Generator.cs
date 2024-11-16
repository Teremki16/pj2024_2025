using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Generator : MonoBehaviour
{
    [SerializeField] GameObject platform;
    [SerializeField] int count = 10;
    [SerializeField] float distance = 5f;
     void Start()
    {
        for(int i = 0; i < count; i++)
        {
            GameObject.Instantiate(platform,
                new Vector3(
                    distance * i,
                    Random.Range(-3f, 3f),
                    0f), Quaternion.identity);
        }
    }

   
    void Update()
    {
        
    }
}
