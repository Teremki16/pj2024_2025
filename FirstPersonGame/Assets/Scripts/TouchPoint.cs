using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TouchPoint : MonoBehaviour
{
    private AIPathfinder pf;

    private void Awake()
    {
        pf = GetComponentInParent<AIPathfinder>();
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Player")){
            pf.Explosion();
        }else if (other.gameObject.CompareTag("Block"))
        {
            pf.Jump();
        }
    }
}
